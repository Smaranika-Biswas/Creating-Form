import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string().min(3).required("Please enter your first name"),
  lastname: Yup.string().min(3).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email id"),
  username: Yup.string().min(4).required("Please enter your username"),
  password: Yup.string().min(4).required("Please enter your password"),
  address: Yup.string().required("Please enter your address"),
  contact: Yup.string()
    .typeError("That doesn't look like a phone number")
    .required("A phone number is required"),
});
