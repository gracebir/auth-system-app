'use client';
import SignupForm from '@/components/SignupForm';
import React from 'react'

const SignupPage = () => {
  return (
    <div className='flex items-center h-screen px-4 lg:px-0'>
      <div className='border border-dark-color flex-1 max-w-3xl grid lg:grid-cols-2 sm:grid-cols-1 p-4 mx-auto'>
        <div className='sm:col-span-1 lg:col-span-2 flex flex-col gap-9'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Create your Free Account</h1>
            <span>Enter your information to continue</span>
          </div>
          <SignupForm/>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
