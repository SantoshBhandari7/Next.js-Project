import { TBrand } from "@/types/brand.types";
import api from "./index";

// export const brand = async (data: FormData) => {
//     try {
//         const response = await api.post("/brands", data)
//         console.log(" create brand response", response);
//         return response.data;
//     } catch (error: any) {

//         console.log(error);
//         throw error?.response.data

//     }
// }

export const brand = async (data: FormData) => {
    try {
        console.log("IS FORMDATA:", data instanceof FormData);
        console.log("NAME:", data.get("name"));
        console.log("DESCRIPTION:", data.get("description"));
        console.log("LOGO:", data.get("logo"));

        const response = await api.post("/brands", data);

        console.log("create brand response", response);

        return response.data;
    } catch (error: any) {
        console.log(error);
        throw error?.response?.data;
    }
};

export const getBrand = async () => {
    try {
        const response = await api.get("/brands");
        return response?.data;

    } catch (error: any) {
        throw error?.response?.data;

    }
}
