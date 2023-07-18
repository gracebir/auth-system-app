'use client';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai'

const SignButton = () => {
    const {data:session} = useSession()
    return (
        <div className='flex gap-10'>
            {session && session?.user ? (
                <>
                    <div className="hidden lg:flex items-center gap-3">
                        <AiOutlineUser size={22} className='text-blue-color' />
                        <div className="flex flex-col">
                            <span className='text-gray-color text-sm'>Hello, {session.user.name} </span>
                            <button onClick={() => signOut()} className='bg-none outline-none hover:underline text-sm'>Logout</button>
                        </div>
                    </div>
                    <div className='border block p-2 border-gray-500 lg:hidden rounded-full'>
                        <AiOutlineUser size={18} className='text-blue-color' />
                    </div>
                </>
            ) : (
                <>
                    <Link className="hidden lg:flex items-center gap-3" href={"/"}>
                        <AiOutlineUser size={22} className='text-blue-color' />
                        <div className="flex flex-col">
                            <span className='text-gray-color text-sm'>Hello, Sign in</span>
                            <span>My Account</span>
                        </div>
                    </Link>
                    <button className='border lg:hidden block border-blue-color px-3 font-semibold text-sm rounded-lg text-blue-color'>
                        Sign In
                    </button>
                </>
            )}
        </div>
    )
}

export default SignButton
