import axios from "axios";
export default axios.create({
  baseURL: "https://kashmircure.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
