
import { TLogin, TSignUp } from "../types/auth.types";
import api from "./index"
// export const login = async (data: TLogin) => {
//   try {
//     console.log("login", data)
//     const response = await api.post("/auth/login", data);
//     return response.data;
//   } catch (error: any) {
//     throw error?.response.data
//   }
// };

export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);

    const result = response.data;

    console.log("Login response:", result);

    // Adjust this according to your backend response
    const token = result?.data?.token || result?.token;

    if (token) {
      localStorage.setItem("token", token);
    }

    return result;
  } catch (error: any) {
    throw error?.response?.data;
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
    localStorage.removeItem("token");
    return response.data;
    ;
  } catch (error: any) {
    throw error?.response?.data;

  }
}


export const getProfile = async () => {
  try {

    const response = await api.get("/auth/getProfile")
    return response.data;

  } catch (error: any) {
    throw error?.response?.data;

  }
}

