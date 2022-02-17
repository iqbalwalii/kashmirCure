<<<<<<< HEAD
import axios from "axios";
export default axios.create({
  baseURL: "https://kashmircure.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
=======
import Axios from 'axios';
const baseURL =
	process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000';
const axios = Axios.create({
	baseURL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default axios;
>>>>>>> c9bd8bc3a307e8c59341433c225126ab4941e44b
