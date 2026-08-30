import api from "."

const createContact = async (data: { name: string, email: string, subject: string, message: string }) => {
    try {
        const response = await api.post("/contacts", data);
        return response.data;

    } catch (error: any) {
        throw error?.response.data;

    }

}
export default createContact;