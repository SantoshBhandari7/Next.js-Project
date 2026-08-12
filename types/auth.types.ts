
import * as yup from "yup";
import {LoginSchema, RegisterSchema} from "../schema/auth.schema"
// export type Tlogin= {
//     email:string;
//     password:string
// }

export type TLogin = yup.InferType<typeof LoginSchema>
export type TSignUp =yup.InferType<typeof RegisterSchema>