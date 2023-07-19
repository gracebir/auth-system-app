import { tDropdrownProps } from '@/lib/type'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const Dropdown = ({ text, isStart = false, data, setText }: tDropdrownProps) => {
    const [open, setOpen] = useState(false)
    const handleDropdownText = (i: number) => {
        setOpen(false)
        setText(data[i])
    }
    return (
        <div className="relative flex w-full">
            <div onClick={() => setOpen(!open)} className="bg-blue-color px-3 py-2 cursor-pointer flex items-center w-full justify-between rounded-sm">
                <div className='flex gap-2 items-center'>
                    {text ? <span className='font-semibold'>{text}</span>: isStart ? <span className='font-semibold italic text-gray-500'>Monday</span>:<span className='font-semibold italic text-gray-500'>Wednesday</span>}
                </div>
                {open ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {open && (
                <div className='absolute top-12 right-0 bg-dark-color flex flex-col w-full z-50 rounded-sm shadow-lg'>
                    <div className="border-b border-gray-600 px-4 py-4">
                        <span className="font-bold">Times</span>
                    </div>
                    <div className='flex flex-col gap-6 px-4 py-4 h-[300px] overflow-y-scroll'>
                        {data.map((item, key) => (
                            <div onClick={() => handleDropdownText(key)} key={key} className='flex items-center cursor-pointer justify-between'>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown