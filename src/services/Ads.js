import Axios from "../utils/axios";

export async function getAds() {
  const { data } = await Axios.get("/ads");
  return data;
}

export async function createAd(page, limit) {
  const { data } = await Axios.post("/ads");
  return data;
}

export async function deleteAd(id) {
  const { data } = await Axios.delete(`/ads/${id}`);
  return data;
}
