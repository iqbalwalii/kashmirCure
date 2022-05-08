import Axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const axios = Axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default axios;
