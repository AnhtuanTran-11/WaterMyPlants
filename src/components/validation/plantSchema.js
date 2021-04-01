import * as yup from "yup";

const plantSchema = yup.object().shape({
  nickname: yup
    .string()
    .required("nickname is required")
    .min(2, "nickname must be a minimum of 8 characters long"),
  species: yup
    .string()
    .required("species is required")
    .min(3, "species must be 3 characters"),
  h2oFrequency: yup.number().required("h20Frequency is required"),
});

export default plantSchema;
