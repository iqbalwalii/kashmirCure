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

export async function setDoctor(id, status, key) {
  let obj = {};
  obj[key] = status;
  const { data } = await Axios.patch(`/doctors/${id}`, obj);
  return data;
}

export async function deleteDoctor(id) {
  const { data } = await Axios.delete(`/doctors/${id}`);
  return data;
}
