import * as yup from "yup";

export const LoginSchema = yup.object({
    email: yup.string().email("invalid email format").required("email is required"),
    password: yup.string().required("password is required")
})

export const RegisterSchema = yup.object({
    full_name: yup.string().required("FullName is required"),
    email: yup.string().email("invalid email format").required("email is required"),
    password: yup.string().required("password is required")
    .matches(/[A-Z]/, "at least one uppercase ir required")
    .matches(/[a-z]/, "at least one lowercase is required")
    .matches(/[0-9]/, "at least one number is required")
    .matches(/[@$_]/, "atleast one special character eg:[@$_] is required"),

    confirmpassword: yup.string().required("confirm password is required")
    .oneOf([yup.ref("password")], "password is not matched"),

    phone: yup
  .string()
  .test(
    "phone",
    "Number should be exactly 10 digits",
    (value) => !value || /^[0-9]{10}$/.test(value)
  ),
    

});