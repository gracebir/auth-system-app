'use client';

import { useState } from "react";
import Dropdown from "./Dropdow";

type typeDayInput = {
   isEnable?: boolean
   startDay: string
   endDay: string 
}

const daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const BoxDay = ({isEnable}: typeDayInput) => {
  const [startDay, setStartDay] = useState("")
  const [endDay, setEndDay] = useState("")
  return (
    <div>
      {isEnable ? (
        <div className="flex flex-col">
            <div className="flex gap-4">
            <Dropdown text={startDay} setText={setStartDay} data={daysWeek}/>
            <Dropdown data={daysWeek} text={endDay} setText={setEndDay}/>
            </div>
            <button className="bg-blue-color px-6 lg:px-7 py-1 lg:py-2 rounded-lg font-semibold">set</button>
        </div>
      ): (
        <div>
          
        </div>
      )}
    </div>
  )
}

export default BoxDay
