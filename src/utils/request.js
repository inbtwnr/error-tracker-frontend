import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";
import router from "@/router";
import { useUserStore } from "@/store/user";

const request = axios.create({
  timeout: 70000,
});

request.defaults.headers.common["Content-Type"] = "application/json";
request.defaults.headers.common.Accept = "application/json";

request.interceptors.request.use(
  (config) => {
    const TOKEN = getToken();
    return {
      ...config,
      headers: {
        ...config.headers,
        common: {
          ...config.headers.common,
          Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
        },
      },
    };
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response.status === 401 &&
        error.response.statusText === "Unauthorized") ||
      (error.response.status === 500 &&
        error.response.data.message === "Expired token")
    ) {
      const userStore = useUserStore();
      userStore.logout();
      router.push("/");
      removeToken();
    } else if (error.response.status === 500) {
      const message =
        error?.response?.data?.message || error?.message || "Error";
      createToast(message);
    }
    return Promise.reject(error);
  }
);
/**
 * @param {string} url
 * @param {string} method
 * @param {object} data
 *
 */
export default request;
