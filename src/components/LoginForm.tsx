'use client';

import { loginSchema } from "@/lib/baseSchema";
import { useFormik } from "formik";
import TextField from "./Elements/TextField";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const { handleSubmit, handleChange, values, errors,handleBlur, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnBlur: true,
        onSubmit: async (values) => {
            signIn('credentials', {
                username: values.email,
                password: values.password,
                redirect: true,
                callbackUrl: '/authenticated'
            })
        },
        validationSchema: loginSchema
    })
    return (
        <form className='col-span-1 flex flex-col gap-9' onSubmit={handleSubmit}>
            <div className='text-center flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Welcome Back</h1>
                <span>Enter your credentials to access your account</span>
            </div>
            <div className='flex flex-col gap-4'>
                <TextField
                    name='email'
                    value={values.email}
                    errorMsg={errors.email}
                    touched={touched.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label='E-mail Address'
                    type='email'
                    placeholder='Email Address' />
                <TextField
                    name='password'
                    label='Password'
                    value={values.password}
                    onBlur={handleBlur}
                    touched={touched.password}
                    errorMsg={errors.password}
                    onChange={handleChange}
                    type='password'
                    placeholder='Enter Your Password' />
                <button type='submit' className='bg-blue-color hover:bg-blue-500 duration-200 py-2 rounded-md'>
                    Sign In
                </button>
                <div className='flex justify-center'>
                    <p>Don't have an account ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signup"}>Sign Up</Link></p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
