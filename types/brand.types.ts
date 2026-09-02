import { BrandSchema, getBrandSchema } from "@/schema/brand.schema";
import * as yup from "yup";

export type TBrand = yup.InferType<typeof BrandSchema>

export type TGetBrand = yup.InferType<typeof getBrandSchema>