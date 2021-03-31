import * as yup from "yup";

const plantSchema = yup.object().shape({
  nickname: yup
    .string()
    .required("nickname is required")
    .min(2, "nickname must be a minimum of 8 characters long"),
  species: yup.string().required("species is required"),
  h2oFrequency: yup.number().required("h20Frequency is required"),
  // going to figure out how to make it mix of numbers and letters
});

export default plantSchema;
