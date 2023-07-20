'use client';
import React, { useState } from 'react'
import Dropdown from './Elements/Dropdow';
import { typeOpenDayForm } from '@/lib/type';
import { saveOpenDay } from '@/lib/queries/openDay';

const daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


const OpenDaysForm = ({
    setOpenDays,
    openDays,
    storeId
}:typeOpenDayForm) => {
    const [startDay, setStartDay] = useState("")
    const [endDay, setEndDay] = useState("")
    const handleClick = async () => {
        if(startDay && endDay){
            const openDay = await saveOpenDay({storeId, startDay, endDay})
            setOpenDays([...openDays, openDay])
        } else {
            console.log("not cool")
        }
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                <Dropdown isStart={true} text={startDay} setText={setStartDay} data={daysWeek} />
                <span className='text-lg hidden lg:block'>-</span>
                <Dropdown text={endDay} setText={setEndDay} data={daysWeek}/>
            </div>
            <button onClick={handleClick} className="bg-blue-color px-6 lg:px-7 py-1 lg:py-2 rounded-lg font-semibold">set</button>
        </div>
    )
}

export default OpenDaysForm
