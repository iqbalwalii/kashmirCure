import Axios from "../utils/axios";

export async function getPayouts(page) {
  const { data } = await Axios.get(`/payouts?page=${page}`);
  return data;
}
