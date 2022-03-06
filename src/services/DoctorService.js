import Axios from "../utils/axios";

export async function getDoctors() {
  const { data } = await Axios.get("/doctors");
  const doctors = data.data;
  return doctors;
}

export async function getDoctor(id) {
  const { data } = await Axios.get(`/doctors/${id}`);
  const doctor = data.data;
  return doctor;
}

export async function setStatus(id, status) {
  const { data } = await Axios.put(`/doctor/${id}`, status);
  return data;
}
