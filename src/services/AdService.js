import Axios from "../utils/axios";
//get all ads
export async function getAds() {
  const { data } = await Axios.get("/ads");
  return data;
}
//create an ad
export async function createAd(input) {
  const { data } = await Axios.post("/ads", input);
  return data;
}
//delete an ad
export async function deleteAd(id) {
  const { data } = await Axios.delete(`/ads/${id}`);
  return data;
}
//post image of ad and update
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

//get single
export async function getAd(id) {
  const { data } = await Axios.get(`/ads/${id}`);
  return data;
}
