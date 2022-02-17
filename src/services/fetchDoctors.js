import Axios from "../utils/axios";

export default function fetchDoctors() {
  try {
    const { data } = Axios.get("/doctor");
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("http errr: >>", error);
  }
}
