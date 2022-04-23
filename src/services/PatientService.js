import Axios from "../utils/axios";

export async function getPatients(page) {
  const { data } = await Axios.get(`/patients?page=${page}`);
  const patients = data.data;
  return patients;
}
export async function getPatient(id) {
  const { data } = await Axios.get(`/patients/${id}`);
  const patient = data.data;
  return patient;
}

export async function deletePatient(id) {
  const { data } = await Axios.delete(`/patients/${id}`);
  return data;
}
