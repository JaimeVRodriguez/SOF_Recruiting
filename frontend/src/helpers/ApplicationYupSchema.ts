import * as yup from "yup";

//TODO: Required Field Messages
export const ApplicationYupSchema = yup.object({
    selection: yup
        .string()
        .required(),
    dodid: yup
        .string()
        .required("Required Field"),
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