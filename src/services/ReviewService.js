import Axios from "../utils/axios";

export async function getReviews(page) {
  const { data } = await Axios.get(`/reviews?page=${page}`);
  return data;
}
export async function getReview(id) {
  const { data } = await Axios.get(`/reviews/${id}`);
  return data;
}
export async function updateReview(id, status) {
  const { data } = await Axios.patch(`/reviews/${id}`, { is_approved: status });
  return data;
}
