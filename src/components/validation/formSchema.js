import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required("Username is required and must be unique")
    .min(8, 'Username must be a minimum of 8 characters long'),
    phoneNumber: yup
    .string()
    .required('Phone number is required'),
    password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long"),
    // going to figure out how to make it mix of numbers and letters
})