import *as yup from "yup";
export const BrandSchema = yup.object({
  name: yup.string().required("name is required"),
  description: yup.string().required("descrition is required").min(25, "atleast 25 character should be involved"),
  logo: yup.string().optional()
});