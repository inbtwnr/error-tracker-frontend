// @ts-check
import { login, register } from "@/api/auth";
import { getErrors } from "@/api/dashboard";
import { defineStore } from "pinia";
import { getToken, setToken, removeToken, setId, removeId } from "@/utils/auth";

const persistToken = getToken();

const initialState = {
  token: persistToken,
  id: "",
  errors: [],
  isLoggedIn: Boolean(persistToken),
};

export const useAppStore = defineStore({
  id: "user",
  state: () => initialState,
  getters: {
    getUser: (state) => state.id,
    getErrors: (state) => state.errors,
  },
  actions: {
    login({ email, password }) {
      removeToken();
      login({
        email,
        password,
      })
        .then((response) => {
          console.log(response.data);
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
    register({ username, email, password }) {
      register({
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
    loadErrors({ id }) {
      getErrors(id)
        .then((response) => {
          const errors = response.data;
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
  },
});
