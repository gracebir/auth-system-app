'use client';

import { signUpSchema } from "@/lib/baseSchema";
import { useFormik } from "formik";
import TextField from "./Elements/TextField";
import Link from "next/link";

const SignupForm = () => {
    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',

        },
        validateOnBlur: true,
        onSubmit: async (values) => {

        },
        validationSchema: signUpSchema
    })

    return (
        <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
            <TextField
                label='Name'
                name='name'
                type='text'
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMsg={errors.name}
                placeholder='Enter Your Name' />
            <TextField
                label='E-mail Address'
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                errorMsg={errors.email}
                placeholder='Email Address' />
            <TextField
                label='Password'
                name='password'
                type='password'
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                errorMsg={errors.password}
                placeholder='Enter Your Password' />
            <TextField
                label='Confirm Password'
                type='password'
                name='confirmPassword'
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMsg={errors.confirmPassword}
                placeholder='Confirm Your Password' />
            <div className="lg:col-span-2 grid justify-items-center grid-cols-1 sm:col-span-1">
                <button type='submit' className='bg-blue-color rounded-md lg:w-1/2 py-2'>
                    Sign Up
                </button>
            </div>
            <div className='flex justify-center lg:col-span-2 sm:col-span-1'>
                <p>I have an account <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/"}>Sign In</Link></p>
            </div>
        </form>
    )
}

export default SignupForm