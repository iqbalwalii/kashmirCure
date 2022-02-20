import Axios from "../utils/axios";

export async function getDoctors() {
  const { data } = await Axios.get("/doctor");
  const doctors = data.data;
  return doctors;
}
