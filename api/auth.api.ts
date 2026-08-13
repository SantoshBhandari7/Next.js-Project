import axios from "axios";
import {TLogin, TSignUp} from "../types/auth.types";

export const Login = async (data:TLogin) => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/auth/login", data);
    return response.data;
  } catch (error:any) {
    throw error?.response.data 
  }
};

export const Signup =async (data:TSignUp)=>{
  try {
    const response = await axios.post("http://localhost:8080/api/v1/auth/register", data);
    return response.data;
    
  } catch (error:any) {
    throw error?.response.data
  }
}

