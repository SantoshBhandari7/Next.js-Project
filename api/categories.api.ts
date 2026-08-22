
import axios from "axios";
import api from "./index"
export const getAllCategories = async () => {
    try {
        const response = await api.get("/categories");
        // console.log("categories response", response)
        return response.data;

    } catch (error: any) {
        console.log(error);
        throw error?.response?.data

    }

}
export const createCategory = async (data: string) => {
    try {
        const response = await axios.post("/categories", data);
        return response.data;

    } catch (error: any) {
        throw error?.response?.data;

    }
}

