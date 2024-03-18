import * as yup from "yup";

//TODO: Required Field Messages
export const ApplicationYupSchema = yup.object({
    branch: yup
        .string()
        .required(),
    dodid: yup
        .string()
        .required("DODID IS REQUIRED"),
    firstName: yup
        .string()
        .required(),
    lastName: yup
        .string()
        .required(),
    rank: yup
        .string()
        .required(),
})