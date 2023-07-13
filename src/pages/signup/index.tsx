import TextField from '@/components/TextField'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'

function Signup() {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

    },
    validateOnBlur: true,
    onSubmit: (values, actions) => {

    },
  })
  return (
    <div>
      <div className='border border-dark-color max-w-3xl grid lg:grid-cols-2 sm:grid-cols-1 p-4 mx-auto'>
        <form autoComplete="off" onSubmit={handleSubmit} className='sm:col-span-1 lg:col-span-2 flex flex-col gap-9'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Create your Free Account</h1>
            <span>Enter your information to continue</span>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
            <TextField
              label='Name'
              name='name'
              type='text'
              value={values.name}
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
              value={values.password}
              onChange={handleChange}
              errorMsg={errors.password}
              placeholder='Enter Your Password' />
            <TextField
              label='Confirm Password'
              type='password'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              errorMsg={errors.confirmPassword}
              placeholder='Confirm Your Password' />
            <button type='submit' className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
              Sign Up
            </button>
            <div className='flex justify-center lg:col-span-2 sm:col-span-1'>
              <p>Do you have an account ? <Link className='text-blue-400 font-bold hover:text-blue-color' href={"/signin"}>Sign In</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
