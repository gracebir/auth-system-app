'use client'
import { typeTimeServiceProps } from '@/lib/type'
import { FaPen } from 'react-icons/fa'
import { BiSolidTrashAlt } from 'react-icons/bi'
import React from 'react'
import { deleteTimeService } from '@/lib/queries/timeService'

const TimeService = ({ startHour, endHour, id, setTimeSevices, timeServices }: typeTimeServiceProps) => {
    const handleDelete = async () => {
        if(id){
            const timeDelete = await deleteTimeService(id)
            setTimeSevices(timeServices.filter( times => times.id !== timeDelete.id))
        }
    }
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base text-blue-200'>{`${startHour} - ${endHour}`}</p>
                <div className='flex gap-3 text-gray-400'>
                    <FaPen className='hover:text-blue-700 cursor-pointer'/>
                    <BiSolidTrashAlt onClick={handleDelete} className='hover:text-red-500 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default TimeService
