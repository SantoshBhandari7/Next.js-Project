import api from "."

export const getCart = async () => {
    try {
        const response = await api.get('/cart');
        return response?.data;


    } catch (error: any) {
        throw error?.response?.data;

    }
}

export const createCart = async (productId: string) => {
    try {
        const response = await api.post('/cart', { productId, quantity: 1 });
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data
    }
}
const removeCart = async (productId: string) => {
    try {
        const response = await api.delete(`/cart/${productId}`);

        console.log("Remove response:", response.data);

        // Fetch updated cart
        await getCart();

    } catch (error) {
        console.log("Remove cart error:", error);
    }
};


export const clearCart = async (productId: string) => {
    try {
        const response = await api.delete(`/cart/${productId}`)
        return response.data;
        await getCart();
    } catch (error: any) {
        throw error?.response?.data;

    }
}