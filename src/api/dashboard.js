import axios from "axios";
import { getToken } from "@/utils/auth";

let token = getToken();
axios.defaults.headers.common["Authorization"] = token;

export const getErrors = async (id) => {
  try {
    const errors = await axios.get(
      `https://error-tracker-api.herokuapp.com/api/project/errors/?id=${id}`
    );

    return errors;
  } catch (err) {
    console.log(err);
  }
};
