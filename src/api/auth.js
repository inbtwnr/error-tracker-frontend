import axios from "axios";

export const register = async (data) => {
  try {
    const register = await axios.post(
      `https://error-tracker-api.herokuapp.com/api/project/register`,
      data
    );
    return register;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (data) => {
  try {
    const login = await axios
      .post(`https://error-tracker-api.herokuapp.com/api/project/login`, data)
      .catch((err) => err);
    return login;
  } catch (err) {
    console.log(err);
  }
};
