'use client';
import { CiSearch } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { LuStore} from 'react-icons/lu'
import Link from 'next/link';
import SignButton from './SignButton';

export const Header = () => {
    return (
        <header className={`w-full`}>
            <div className='w-full border-b border-dark-color top-0 sticky z-50 py-6 bg-very-dark'>
                <div className='flex flex-row justify-between max-w-6xl mx-auto px-4 lg:px-2'>
                    <div className="flex text-gray-300 lg:hidden w-8 h-8 items-center justify-center cursor-pointer">
                        <LuStore size={24} />
                    </div>
                    {/* logo */}
                    <div className='flex gap-8 items-center'>
                        <Link href="/authenticated" className="text-blue-color flex flex-col gap-1 items-center cursor-pointer">
                            <p className='font-bold text-xl lg:text-2xl'>Mstore</p>
                            <div className='lg:w-[45px] w-[40px] h-[3px] lg:h-[4px] bg-blue-color'></div>
                        </Link>
                        {/* <form className='border hidden border-gray-500 lg:flex w-[450px] rounded-sm'>
                            <input className="w-full px-3 py-2 outline-none bg-very-dark rounded-tl-sm rounded-bl-sm" type="text" placeholder="find your store" />
                            <button className='w-12 cursor-pointer flex items-center justify-center bg-blue-color rounded-tr-sm rounded-br-sm'>
                                <CiSearch size={20} />
                            </button>
                        </form> */}
                    </div>
                    <SignButton/>
                </div>
                
            </div>
        </header>
    )
}
