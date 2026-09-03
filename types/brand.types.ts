import { BrandSchema, getBrandSchema } from "@/schema/brand.schema";
import * as yup from "yup";
import { Image } from "./gloabl.types";
export type IBrands = {
    _id: string;
    name: string;
    logo: Image;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export type TBrand = yup.InferType<typeof BrandSchema>

export type TGetBrand = yup.InferType<typeof getBrandSchema>