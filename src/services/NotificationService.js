import Axios from "../utils/axios";

export async function getDoctorAlerts() {
  const { data } = await Axios.get(`notifications/doctor`);
  return data;
}
export async function getPatientAlerts() {
  const { data } = await Axios.get(`notifications/patient`);
  return data;
}

export async function setAlert(payload) {
  const { data } = await Axios.post(`notifications`, payload);
  return data;
}

export async function getDashboard() {
  const { data } = await Axios.get(`dashboard`);
  return data;
}
export async function setDashboard(dates) {
  const { data } = await Axios.post(`dashboard`, dates);
  return data;
}
