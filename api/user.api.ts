import api from "."

export const getAllUser = async () => {
    try {
        const response = await api.get('/users');
        return response.data;

    } catch (error: any) {
        throw error?.response.data

    }

}