'use client'
import { useFormik } from 'formik'
import React from 'react'
import TextField from './Elements/TextField'

const StoreForm = () => {
    const { values, errors, handleChange, touched, handleBlur } = useFormik({
        initialValues: {
            name: ''
        },
        validateOnBlur: true,
        onSubmit: () => { }
    })
    return (
        <form className='mt-4 flex flex-col gap-4'>
            <p className='text-sm lg:text-base italic text-center'>You're about to a new store 📝</p>
            <div className='flex flex-col gap-3'>
                <TextField
                    type='text'
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.name}
                    value={values.name}
                    errorMsg={errors.name}
                    label='Store name'
                    placeholder='Example Amazon...'
                />
                <div className='flex justify-center w-full'>
                    <button className='bg-blue-color px-6 lg:px-7 py-1 lg:py-2 rounded-lg'>add</button>
                </div>
            </div>
        </form>
    )
}

export default StoreForm
