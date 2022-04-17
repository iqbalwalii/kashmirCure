import Axios from "../utils/axios";

export async function getContact(page) {
  const { data } = await Axios.get("/contact?page=" + page);

  return data;
}

// export async function getContact(id) {
//   const { data } = await Axios.get("/contact?page=" + page);

//   return data;
// }

export async function updateContact(id, type, val) {
  let obj = {};
  obj[type] = val;
  const { data } = await Axios.patch(`/contact/${id}`, obj);

  return data;
}
