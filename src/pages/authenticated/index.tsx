import Dropdown from "@/components/Dropdown"
import { times, days } from "@/data"
import { useContext, useState } from "react"
import IsAuth from "@/components/IsAuth"
import { AppContext } from "@/context/userContext"
import { saveStoreDaySchedule, saveStoreTimeSchedule } from "@/utils/scheduleApi"
import DisplaySchedule from "@/components/DisplaySchedule"

function Authenticated() {
  const { user } = useContext(AppContext)
  const userId = user?.id!
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [startDay, setStartDay] = useState("Days here")
  const [endDay, setEndDay] = useState("End Days here")
  const handDayClick = async () => {
    await saveStoreDaySchedule({ startDay, endDay, userId })
      .then((data) => console.log(data))
      .catch(error => console.log(error))
  }

  const handTiclick = async () => {
    await saveStoreTimeSchedule({
      startHour: startTime,
      endHour: endTime,
      storeId: 1
    })
      .then((data) => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <main className="flex items-center min-h-screen">
      <div className='border border-dark-color rounded-md grid lg:grid-cols-2 sm:grid-cols-1 gap-3 flex-1 max-w-7xl mx-auto p-4'>
        <div className="col-span-1 flex flex-col gap-8">
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Store Schedule</h1>
            <span>Set the Schedule of your store here</span>
          </div>
          <div className="px-4 flex flex-col gap-4">
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
              <div className="col-span-1 flex flex-col gap-2">
                <span>From(Day)</span>
                <Dropdown setPlaceholder={setStartDay} typeDrop="days" placeholder={startDay} data={days} />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span>To(Day)</span>
                <Dropdown setPlaceholder={setEndDay} typeDrop="days" placeholder={endDay} data={days} />
              </div>
              <button onClick={handDayClick} className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
                Save days
              </button>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 '>
            <div className="col-span-1 flex flex-col gap-2">
                <span>At(Time)</span>
                <Dropdown setPlaceholder={setStartTime} typeDrop="time" placeholder={startTime} data={times} />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span>To(Time)</span>
                <Dropdown setPlaceholder={setEndTime} typeDrop="time" placeholder={endTime} data={times} />
              </div>

              <button onClick={handTiclick} className='bg-blue-color lg:col-span-2 sm:col-span-1 py-2 rounded-md'>
                save times
              </button>
            </div>
          </div>
        </div>
        <DisplaySchedule />
      </div>
    </main>
  )
}

export default Authenticated
