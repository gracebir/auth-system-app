import Dropdown from "@/components/Dropdown"
import { times, days } from "@/data"
import { useState} from "react"
import IsAuth from "@/components/IsAuth"

 function Authenticated() {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [startDay, setStartDay] = useState("Days here")
  const [endDay, setEndDay] = useState("End Days here")

  return (
    <main className="flex items-center min-h-screen">
      <div className='border border-dark-color rounded-md grid lg:grid-cols-2 sm:grid-cols-1 flex-1 max-w-7xl mx-auto p-4'>
        <div className="col-span-1 flex flex-col gap-8">
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Store Schedule</h1>
            <span>Set the Schedule of your store here</span>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 px-4'>
            <div className="col-span-1 flex flex-col gap-2">
              <span>From(Day)</span>
              <Dropdown setPlaceholder={setStartDay} typeDrop="days" placeholder={startDay} data={days} />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <span>To(Day)</span>
              <Dropdown setPlaceholder={setEndDay} typeDrop="days" placeholder={endDay} data={days} />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <span>At(Time)</span>
              <Dropdown setPlaceholder={setStartTime} typeDrop="time" placeholder={startTime} data={times} />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <span>To(Time)</span>
              <Dropdown setPlaceholder={setEndTime} typeDrop="time" placeholder={endTime} data={times} />
            </div>

            <button className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
              save
            </button>
          </div>
        </div>
        <div className="col-span-1 border border-dark-color rounded-md">

        </div>
      </div>
    </main>
  )
}

export default Authenticated
