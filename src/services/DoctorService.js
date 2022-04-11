import Axios from "../utils/axios";

export async function getDoctors(page) {
  const res = await Axios.get(`/doctors?page=${page}&is_verified=true`);
  let doctors = res.data.data.doctors;
  const { data } = await Axios.get(`/doctors?page=${page}&is_verified=false`);
  doctors = [...doctors, ...data.data.doctors];
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
