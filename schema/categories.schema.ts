
import *as yup from "yup";
export const CategorySchema = yup.object({
    name: yup.string().required("name is required"),
    description: yup.string().required("descrition is required").matches(/[A-Z][a-z][0-9]/, "atleast 25 character should be involved"),
    images: yup.string().optional()
});