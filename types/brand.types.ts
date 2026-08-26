import { BrandSchema } from "@/schema/brand.schema";
import * as yup from "yup";

export type TBrand = yup.InferType<typeof BrandSchema>
