import { TProduct } from "@/types/product.types"
import api from "./index"
export const product = async(data:TProduct)=>{
    try {
        const response = await api.post("/product",data);
        console.log("product response", response)
        return response.data;
        
    } catch (error:any) {
        console.log(error);
        throw error?.response.data
        
    }
    
}