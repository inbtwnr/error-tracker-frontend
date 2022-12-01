// @ts-check
import { login, register } from "@/api/auth";
import { getErrors, getName } from "@/api/dashboard";
import { defineStore } from "pinia";
import { getToken, setToken, removeToken, setId, removeId } from "@/utils/auth";

const persistToken = getToken();

const initialState = {
  token: persistToken,
  id: "",
  errors: [],
  name: "",
  isLoggedIn: Boolean(persistToken),
};

export const useAppStore = defineStore({
  id: "user",
  state: () => initialState,
  getters: {
    getUser: (state) => state.id,
    getErrors: (state) => state.errors,
    getName: (state) => state.name,
  },
  actions: {
    async login({ email, password }) {
      removeToken();
      return await login({
        email,
        password,
      })
        .then((response) => {
          const { token = null, id } = response.data;
          this.token = token;
          this.id = id;
          setToken(token);
          setId(id);
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
    async register({ username, email, password }) {
      await register({
        name: username,
        email: email,
        password,
      })
        .then((response) => {
          const [errors] = response.data;
          this.errors = errors;
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
    async loadErrors(id) {
      await getErrors(id)
        .then((response) => {
          const errors = response.data.data;
          this.errors = errors;
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
    logout() {
      Object.assign(this, initialState);

      removeId();
      removeToken();
    },
    loadName(name) {
      getName(name)
        .then((response) => {
          const name = response.data;
          this.name = name.data;
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
