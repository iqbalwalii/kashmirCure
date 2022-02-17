import Axios from "../utils/axios";

export default function fetchPatient() {
  try {
    const { data } = Axios.get("/patients");
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("http errr: >>", error);
    return error;
  }
}
