import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex items-center h-screen'>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-4 border border-dark-color rounded-md min-h-[50vh] flex-1 p-4">
          <LoginForm/>
          <div className="bg-blue-color text-white-color hidden lg:flex flex-col items-center justify-center rounded-md h-full lg:col-span-1">
            <div className='text-center px-3 flex flex-col gap-4 items-center'>
              <h3 className="text-2xl font-bold">Welcome to e-store</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
              <Link className='px-6 py-2 rounded-md border border-white-color' href={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
