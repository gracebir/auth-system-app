import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    password: yup.string().min(6).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"Password doesn't match").required("Required")
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().min(6).required("Password required"),
})

export const storeSchema = yup.object().shape({
    name: yup.string().min(4).required("name is required")
})

const format = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/

export const timeServiceSchema = yup.object().shape({
    startHour: yup.string().matches(format, "eg. 01:00 or 15:30").required("required"),
    endHour: yup.string()
    .matches(format, "eg. 14:00")
    .required("required")
    .notOneOf([yup.ref("startHour")],"can't match start hour")
})