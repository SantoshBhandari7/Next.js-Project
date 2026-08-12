import *as yup from "yup";
export const ProductSchema=yup.object({
    name:yup.string().required("name is requird"),
    price:yup.string().required("price is required"),
    stock:yup.string().required("stock is required"),
    description:yup.string().required("descrition is required").matches(/[A-Z][a-z][0-9]/,"atleast 25 character should be involved"),
    new_arrival:yup.string().required("new arrival is required")

})