import *as yup from "yup";
export const ProductSchema = yup.object({
    name: yup.string().required("name is requird"),
    price: yup.number().required("price is required").positive("price must be greater than 0").min(500),
    stock: yup.number().required("stock is required").min(0).positive(),
    description: yup.string().required("descrition is required").min(25, "atleast 25 character should be involved"),
    new_arrival: yup.boolean().optional(),
})