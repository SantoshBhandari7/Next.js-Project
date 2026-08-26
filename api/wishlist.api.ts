import api from "."

export const getWishList = async () => {
    try {
        const response = await api.get("/wishlists");
        return response.data;

    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const addToWishLists = async (productId: string) => {
    try {
        const response = await api.post("/wishlists", { productId });
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;

    }
}

export const clearWishList = async (productId: string) => {
    try {
        const response = await api.delete("/wishlists");
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}