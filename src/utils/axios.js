import Axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:4000";
const axios = Axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axios;
