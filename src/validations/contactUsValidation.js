import * as Yup from "yup";

export const contactUsSchema = Yup.object().shape({
  fullName: Yup.string().required("Writing the name is required"),
  email: Yup.string()
    .email("The email address is not valid")
    .required("Email address is required"),
  message: Yup.string().required("Empty message will not be sent"),
});
