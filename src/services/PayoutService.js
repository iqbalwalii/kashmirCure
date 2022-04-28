import Axios from "../utils/axios";

export async function getPayouts(page) {
  const { data } = await Axios.get(`doctors/payouts?page=${page}`);
  return data;
}
