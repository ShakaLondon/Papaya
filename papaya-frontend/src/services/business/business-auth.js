import axios from "axios";
import api from "../api.js"

const register = (userObject) => {
  return api.post("user/business/register", userObject);
};

const login = (email, password) => {
  return api.post("user/business/me", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};


export default {
  register,
  login,
  logout,
};