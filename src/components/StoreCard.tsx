'use client'
import { useEffect, useState } from "react"
import OpenDay from "./OpenDay"
import { fetchOpenDay } from "@/lib/queries/openDay"
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { openDayType, storeType } from "@/lib/type"
import OpenDaysForm from "./OpenDaysForm"

function StoreCard({ name, id }: storeType) {
  const [collapse, setCollapse] = useState(false)
  const [openDay, setOpenDay] = useState<Array<openDayType>>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (id) {
      fetchOpenDay(id)
        .then(data => setOpenDay(data))
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <div className="border transition ease-in-out duration-300 hover:border-blue-900 border-blue-color rounded-lg px-6 py-3">
      <div className="flex justify-between">
        <div>
          <h3 className="text-blue-500 font-bold text-lg capitalize">{name}</h3>
        </div>
        <button onClick={() => setCollapse(!collapse)}>
          {collapse ? <AiOutlineMinus size={23} /> : <AiOutlinePlus size={23} />}
        </button>
      </div>
      {collapse && (
        <div className="flex border border-blue-950 p-2 duration-3000 transition-all ease-in-out flex-row w-full">
          <div className="w-full flex flex-col gap-2 lg:gap-3">
            <div className="flex flex-col gap-2 items-center">
              <p className="italic text-sm text-gray-300 text-center mb-2 font-semibold">manage day's schedule here</p>
              <button onClick={() => setShowForm(!showForm)} className={`duration-300 transition-all ${showForm ? 'px-3 py-3 rounded-full text-gray-200 border border-blue-300 hover:border-blue-color' : 'px-4 lg:px-6 py-2 border border-blue-900 hover:border-blue-color rounded-lg'}`}>
                {showForm ? <IoMdClose className="text-white text-base" /> : "add open day(s)"}
              </button>
              {showForm && (
                 <div className="rounded-lg px-3 flex-1 w-full py-2 lg:px-4 lg:py-3 border border-blue-400">
                  <OpenDaysForm storeId={id} setOpenDays={setOpenDay} openDays={openDay}/>
                 </div>
              )}
            </div>

            {openDay && openDay.map((open) => (
              <OpenDay key={open.id} id={open.id} startDay={open.startDay} endDay={open.endDay} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StoreCard