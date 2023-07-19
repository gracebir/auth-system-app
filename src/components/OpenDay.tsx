'use client';
import { openDayType, timeServiceType } from '@/lib/type';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { fetchTimeService } from '@/lib/queries/timeService';
import TimeService from './TimeService';
import { FaPen } from 'react-icons/fa'
import { BiSolidTrashAlt } from 'react-icons/bi'
const OpenDay = ({ id, startDay, endDay }: openDayType) => {
  const [collapse, setCollapse] = useState(false)
  const [timeServices, setTimeSevices] = useState<Array<timeServiceType>>([])
  useEffect(() => {
    if (id) {
      fetchTimeService(id)
        .then(data => setTimeSevices(data))
        .catch(error => console.log(error))
    }
  }, [])
  return (
    <div className='border-b w-full py-1 lg:py-2'>
      <div className='flex justify-between'>
        <div className='flex justify-between gap-5 items-center '>
          <span className="text-center text-sm lg:text-base text-gray-300 font-semibold">{startDay} to {endDay}</span>
          <div className='flex gap-3 text-gray-400'>
            <FaPen className='hover:text-blue-700' />
            <BiSolidTrashAlt className='hover:text-red-500' />
          </div>
        </div>
        <div onClick={() => setCollapse(!collapse)} className='text-base cursor-pointer lg:text-lg'>
          {collapse ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {collapse && (
        <>
          {timeServices.length ? (
            <div className='ml-6 border-l border-gray-400 pl-2'>
              <h3 className='text-base lg:text-lg'>Times service ranges</h3>
              {timeServices.map((times) => (
                <TimeService dayId={times.dayId} startHour={times.startHour} endHour={times.endHour} key={times.id} />
              ))}
            </div>
          ) : (
            <div className='ml-6 border-l border-gray-400 pl-2'>
              <span className='text-center'>No times range sets</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default OpenDay
