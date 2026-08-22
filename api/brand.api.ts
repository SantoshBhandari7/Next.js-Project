import { TBrand } from "@/types/brand.types";
import api from "./index";

export const brand = async (data: TBrand) => {
    try {
        const response = await api.post("/brands", data)
        console.log(" create brand response", response);
        return response.data;
    } catch (error: any) {

        console.log(error);
        throw error?.response.data

    }
}
