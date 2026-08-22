import *as yup from "yup";
export const ProductSchema = yup.object({
    name: yup.string().required("name is requird"),
    price: yup.number().required("price is required").positive("price must be greater than 0"),
    stock: yup.number().required("stock is required").min(0),
    description: yup.string().required("descrition is required").matches(/[A-Z][a-z][0-9]/, "atleast 25 character should be involved"),
    new_arrival: yup.string().required("new arrival is required")

})