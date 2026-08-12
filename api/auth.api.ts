import axios from "axios";
import {TLogin} from "../types/auth.types";

export const Login = async (data:TLogin) => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/auth/login", data);
    return response.data;
  } catch (error:any) {
    throw error?.response.data 
  }
};

