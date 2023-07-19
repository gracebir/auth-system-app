'use client'
import { useEffect, useState } from "react"
import OpenDay from "./OpenDay"
import { fetchOpenDay } from "@/lib/queries/openDay"
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { openDayType, storeType } from "@/lib/type"

function StoreCard({ name, id }: storeType) {
  const [collapse, setCollapse] = useState(false)
  const [openDay, setOpenDay] = useState<Array<openDayType>>([])

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
            <p className="italic text-sm text-gray-300 text-center mb-2 font-semibold">manage day's schedule here</p>
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