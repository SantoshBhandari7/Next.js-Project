import ContactSchema from "@/schema/contact.schema";
import * as yup from "yup";
export type TContact = yup.InferType<typeof ContactSchema>