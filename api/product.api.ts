
import { TProduct } from "@/types/product.types";
import api from "./index"
export const product = async () => {
    try {
        const response = await api.get("/products");
        // console.log("product response", response)
        return response.data;

    } catch (error: any) {
        console.log(error);
        throw error?.response?.data;

    }

}

export const getById = async (id: string) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;

    } catch (error: any) {
        throw error?.response.data;

    }

}

export const createProduct = async (data: FormData) => {
    try {
        const response = await api.post("/products", data);
        // console.log("product response", response)
        return response.data;

    } catch (error: any) {
        console.log(error);
        throw error?.response?.data;

    }

}