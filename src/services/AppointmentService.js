import Axios from "../utils/axios";

export async function getAppointments(page) {
  const { data } = await Axios.get(`/appointments?page=${page}`);
  return data;
}

export async function deleteAppointment(id) {
  const { data } = await Axios.delete(`/appointments/${id}`);
  return data;
}

export async function getAppointment(id) {
  const { data } = await Axios.get(`/appointments/${id}`);
  return data;
}

export async function updateAppointment(id) {
  const { data } = await Axios.patch(`/appointments/${id}`);
  return data;
}
