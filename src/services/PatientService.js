import Axios from "../utils/axios";

export async function getPatients() {
  const { data } = await Axios.get("/patients");
  const patients = data.data;
  return patients;
}
