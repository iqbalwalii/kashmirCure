import Axios from "../utils/axios";

export async function getDoctors() {
  const { data } = await Axios.get("/doctor");
  const doctors = data.data;
  return doctors;
}

export async function getDoctor(id) {
  const { data } = await Axios.get(`/doctor/${id}`);
  const doctor = data.data;
  return doctor;
}
