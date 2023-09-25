import * as yup from "yup"

export const schema = yup.object().shape({
    from_name: yup.string().required("Name is required"),
    email_from: yup.string().email("Email is not valid").required("Email is required"),
    subject: yup.string().required("Subject is required")

})