
import { TLogin, TSignUp } from "../types/auth.types";
import api from "./index"
export const login = async (data: TLogin) => {
  try {
    console.log("login", data)
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

export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
    ;
  } catch (error: any) {
    throw error?.response?.data;

  }
}


export const getProfile = async () => {
  try {
    const response = await api.get("/auth/getProfile");
    return response.data;

  } catch (error: any) {
    throw error?.response?.data;

  }
}

