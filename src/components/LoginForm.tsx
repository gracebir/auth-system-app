import { useFormik } from 'formik';
import React from 'react'
import TextField from './TextField';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { loginSchema } from '@/validator/authValidation';
import { userLogin } from '@/utils/AuthentionApi';

const LoginForm = () => {
  const { push} = useRouter()
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validateOnBlur: true,
    onSubmit: async (values) => {
      await userLogin({
        email: values.email,
        password: values.password
      }).then((data)=> {
        console.log(data)
        push('/authenticated')
      }).catch(err => console.log(err))
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
          onChange={handleChange}
          label='E-mail Address'
          type='email'
          placeholder='Email Address' />
        <TextField
          name='password'
          label='Password'
          value={values.password}
          errorMsg={errors.password}
          onChange={handleChange}
          type='password'
          placeholder='Enter Your Password' />
        <button type='submit' className='bg-blue-color py-2 rounded-md'>
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
