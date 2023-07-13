import React, { useState } from 'react'
import { tDropdrownProps } from '../../typing'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { LuLayoutGrid } from 'react-icons/lu'
import { GoClock } from 'react-icons/go'

const Dropdown = ({ placeholder, setPlaceholder, data, typeDrop }: tDropdrownProps) => {
    const [open, setOpen] = useState(false)
    const handleDropdownText = (i: number) => {
        setPlaceholder(`${data[i]} ${typeDrop === "time" ? i > 11 ? "PM":"AM" : ""}`)
        setOpen(false)
    }
    return (
        <div className="relative flex w-full">
            <div onClick={() => setOpen(!open)} className="bg-blue-color px-3 py-2 cursor-pointer flex items-center w-full justify-between rounded-sm">
                <div className='flex gap-2 items-center'>
                    {typeDrop === "time" ? <GoClock size={23} /> : <LuLayoutGrid size={23} />}
                    <span className='font-semibold'>{placeholder ? placeholder : "--:--"}</span>
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
                                <div className='flex items-center gap-4 text-gray-400'>
                                    <span className='font-bold text-base'>{item} {typeDrop === "time" ? key > 11 ? "PM":"AM" : ""}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
