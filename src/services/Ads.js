import Axios from "../utils/axios";

export async function getAds() {
  const { data } = await Axios.get("/ads");
  return data;
}

export async function createAd(input) {
  const { data } = await Axios.post("/ads", input);
  return data;
}

export async function deleteAd(id) {
  const { data } = await Axios.delete(`/ads/${id}`);
  return data;
}
export async function postAd(id, file) {
  var formData = new FormData();
  formData.append("adImage", file);
  const { data } = await Axios.put(`/ads/upload/image/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
export async function updateAd(id) {
  const { data } = await Axios.put(`/ads/upload/image${id}`);
  return data;
}
