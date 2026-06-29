import axios from "axios";

const api = axios.create({
  baseURL: "https://full-stack-backend-15hz.onrender.com",
});

export default api;