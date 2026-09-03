import { Image } from "@/types/gloabl.types";
import *as yup from "yup";
export const ProductSchema = yup.object({
    name: yup.string().required("name is requird"),
    price: yup.number().required("price is required").positive("price must be greater than 0").min(500),
    stock: yup.number().required("stock is required").min(0, "stock cannot be negative"),
    cover_image: yup.mixed<FileList>().required("cover_image is required"),
    description: yup.string().required("descrition is required").min(25, "atleast 25 character should be involved"),
    category: yup
        .string()
        .required("category is required"),

    brand: yup
        .string()
        .required("brand is required"),
    new_arrival: yup.boolean().required().default(false),
})