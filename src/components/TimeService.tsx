'use client'
import { timeServiceType } from '@/lib/type'
import { FaPen } from 'react-icons/fa'
import { BiSolidTrashAlt } from 'react-icons/bi'
import React from 'react'

const TimeService = ({ startHour, endHour, id }: timeServiceType) => {
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base text-blue-200'>{`${startHour} - ${endHour}`}</p>
                <div className='flex gap-3 text-gray-400'>
                    <FaPen className='hover:text-blue-700'/>
                    <BiSolidTrashAlt className='hover:text-red-500'/>
                </div>
            </div>
        </div>
    )
}

export default TimeService
