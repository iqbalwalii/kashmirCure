import Axios from "../utils/axios";

export async function login(credentials) {
  const { data } = await Axios.post("/users/signin", credentials);

  return data;
}
