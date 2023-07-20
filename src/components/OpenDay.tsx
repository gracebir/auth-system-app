'use client';
import { openDayProps, openDayType, timeServiceType } from '@/lib/type';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { fetchTimeService } from '@/lib/queries/timeService';
import TimeService from './TimeService';
import { FaPen } from 'react-icons/fa'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { TimeServiceForm } from './TimeServiceForm';
import { deleteOpenDay } from '@/lib/queries/openDay';

const OpenDay = ({ id, startDay, endDay, setOpenDays, openDays }: openDayProps) => {
  const [collapse, setCollapse] = useState(false)
  const [timeServices, setTimeSevices] = useState<Array<timeServiceType>>([])
  const [showForm, setShowForm] = useState(false)

  const handleDelete = async() =>{
    if(id){
      const openDayDeleted = await deleteOpenDay(id)
      setOpenDays(openDays.filter(days => days.id !== openDayDeleted.id))
    }
   
  }

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
            <FaPen className='hover:text-blue-700 cursor-pointer' />
            <BiSolidTrashAlt onClick={handleDelete} className='hover:text-red-500 cursor-pointer' />
          </div>
        </div>
        <div onClick={() => setCollapse(!collapse)} className='text-base cursor-pointer lg:text-lg'>
          {collapse ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {collapse && (
        <>
          {timeServices.length ? (
            <div className='ml-6 border-l flex flex-col gap-2 lg:gap-3 border-gray-400 pl-2'>
              <div className='flex flex-col items-center lg:flex-row gap-2 lg:gap-4'>
                <h3 className='text-base lg:text-lg'>Times service ranges</h3>
                <button onClick={() => setShowForm(!showForm)} className={`duration-300 transition-all ${showForm ? 'px-3 py-3 rounded-full text-gray-200 border border-blue-300 hover:border-blue-color' : 'px-2 lg:px-6 py-1 border border-blue-900 hover:border-blue-color rounded-lg'}`}>
                  {showForm ? <IoMdClose className="text-white text-base" /> : "add availability"}
                </button>
              </div>
              {showForm && (
                <TimeServiceForm setTimeSevices={setTimeSevices} timeServices={timeServices} dayId={id!} />
              )}
              {timeServices.map((times) => (
                <TimeService setTimeSevices={setTimeSevices} timeServices={timeServices} dayId={times.dayId} startHour={times.startHour} endHour={times.endHour} key={times.id} />
              ))}
            </div>
          ) : (
            <div>
              <div className='ml-6 border-l flex items-center gap-6 border-gray-400 pl-2'>
                <span className='text-center'>No times range sets</span>
                <button onClick={() => setShowForm(!showForm)} className={`duration-300 transition-all ${showForm ? 'px-3 py-3 rounded-full text-gray-200 border border-blue-300 hover:border-blue-color' : 'px-2 lg:px-6 py-1 border border-blue-900 hover:border-blue-color text-sm rounded-lg'}`}>
                  {showForm ? <IoMdClose className="text-white text-base" /> : "add availability"}
                </button>
              </div>
              {showForm && (
                <TimeServiceForm setTimeSevices={setTimeSevices} timeServices={timeServices} dayId={id!} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default OpenDay
