import Axios from "../utils/axios";

export async function getBlogs() {
  const { data } = await Axios.get(`/posts`);
  return data;
}
export async function getBlog(id) {
  const { data } = await Axios.get(`/posts`);
  return data;
}
export async function updateBlog(id) {
  const { data } = await Axios.patch(`/posts`);
  return data;
}
export async function deleteBlog(id) {
  const { data } = await Axios.delete(`/posts`);
  return data;
}
export async function createPost(input) {
  const { data } = await Axios.post(`/posts`, input);
  return data;
}
