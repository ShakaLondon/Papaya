import axios from "axios"
import api from "../api.js"


const register = (userObject) => {
  console.log(userObject + "register user")
  return api.post("users/register", userObject)
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    const userData = response.data
    console.log(userData)

    return response.data;
  });;
};

const login = (email, password) => {
  console.log("login action" + email + password)
  return api.post("users/me", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      const userData = response.data
      console.log(userData)

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};


const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};