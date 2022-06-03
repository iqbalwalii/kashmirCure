import Axios from "../utils/axios";

export async function login(credentials) {
  const { data } = await Axios.post("/users/signin", credentials);

  return data;
}

export async function forgetPassword(email) {
  const { data } = await Axios.post("/users/resetPassword", { email });
  return data;
}

export async function reset(id, password) {
  const { data } = await Axios.patch(`/users/${id}`, { password });
  return data;
}
