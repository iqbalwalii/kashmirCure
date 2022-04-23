import Axios from "../utils/axios";

export async function getCoupons(page) {
  const { data } = await Axios.get(`/coupons?page=${page}`);
  const coupons = data.data;
  return coupons;
}
export async function getCoupon(id) {
  const { data } = await Axios.get(`/coupons/${id}`);
  const coupon = data.data;
  return coupon;
}
export async function createCoupon(input) {
  const { data } = await Axios.post(`/coupons`, input);
  const coupon = data.data;
  return coupon;
}
export async function deleteCoupon(id) {
  const { data } = await Axios.delete(`/coupons/${id}`);
  const coupon = data.data;
  return coupon;
}
export async function updateCoupon(id, input) {
  const { data } = await Axios.patch(`/coupons/${id}`, input);
  const coupon = data.data;
  return coupon;
}
