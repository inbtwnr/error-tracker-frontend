import axios from "axios";
import { getToken } from "@/utils/auth";

let token = getToken();
axios.defaults.headers.common["Authorization"] = token;

export const getErrors = async (id) => {
  try {
    return await axios
      .get(`https://error-tracker-api.herokuapp.com/api/project/errors/${id}`)
      .then((response) => response);
  } catch (err) {
    console.log(err);
  }
};

export const getName = async (name) => {
  try {
    return await axios
      .get(
        `https://error-tracker-api.herokuapp.com/api/project/errors/user/${name}`
      )
      .then((response) => response);
  } catch (err) {
    console.log(err);
  }
};
