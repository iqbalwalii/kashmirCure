import Axios from "../utils/axios";

export async function getInActiveDoctors() {
	const { data } = await Axios.get("/doctors?is_verified=true");
	const doctors = data.data;
	return doctors;
}

export async function getActiveDoctors() {
	const res = await Axios.get("/doctors?is_verified=false");
	let doctors = res.data.data.doctors;
	console.log("first 222", doctors);
	const { data } = await Axios.get("/doctors?is_verified=true");
	doctors = [...doctors, ...data.data.doctors];
	console.log("first 22244", doctors);
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
