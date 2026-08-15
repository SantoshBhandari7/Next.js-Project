
import { TLogin, TSignUp } from "../types/auth.types";
import api from "./index"
export const Login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    throw error?.response.data
  }
};

export const Signup = async (data: TSignUp) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;

  } catch (error: any) {
    throw error?.response.data
  }
}

