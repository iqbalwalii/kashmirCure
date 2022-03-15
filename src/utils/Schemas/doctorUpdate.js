import * as yup from "yup";
export const doctorSchema = (doctor) => {
  yup.object().shape({
    name: yup.string(),
    phone: yup.string(),
    gender: yup.string(),
    address: yup.string(),
    practicing_from: yup.date(),
    specializations: yup.lazy((val) =>
      Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()
    ),
    available_slots: yup.lazy((val) =>
      Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()
    ),
    recommendation_count: yup.number(),
  });
};
