import { ProductSchema } from "@/schema/product.schema";
import *as yup from "yup";
export type TProduct =yup.InferType<typeof ProductSchema>