import { CategorySchema } from "@/schema/categories.schema";
import { Image } from "./gloabl.types";
import * as yup from "yup"
export type ICategory = {
    _id: string;
    name: string;
    image: Image
    description?: string;
    createdAt: string;
    updatedAt: string;
}


export type TCategory = yup.InferType<typeof CategorySchema>