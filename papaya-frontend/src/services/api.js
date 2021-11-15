import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3005/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    // 'Content-Type': 'multipart/form-data'
  },
});

export default instance;