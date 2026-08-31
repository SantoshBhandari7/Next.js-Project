import * as yup from "yup";

const ContactSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required").email("should be email format"),
    message: yup.string().required("message is required"),
    subject: yup.string().required("subject required"),
});
export default ContactSchema;