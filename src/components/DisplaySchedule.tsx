import { AppContext } from '@/context/userContext'
import useDay from '@/hooks/useDay'
import useTime from '@/hooks/useTime'
import React, { useContext } from 'react'

function DisplaySchedule() {
    const { user } = useContext(AppContext)
    const days = useDay(user?.id!)
    const times = useTime(days?.id! === undefined ? 1 : days.id!)
    console.log(days)
    return (
        <div className="col-span-1 border border-dark-color rounded-md p-4 flex flex-col gap-6">
            <div className="flex flex-col text-center gap-2">
                <h1 className="font-bold text-xl">Store Schedule</h1>
                <p>Weekly Schedule is listed here</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p>The Store will be open: </p>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div>
                        <span className="font-bold">From</span>: {days?.startDay}
                    </div>
                    <div>
                        <span className="font-bold">To</span>:{days?.endDay}
                    </div>
                    <span className='text-center col-span-2'>Open Time</span>
                    <div className='col-span-2 flex flex-col gap-2 items-center'>
                        {times.map(({ startHour, endHour }, key)=> (
                            <span key={key}>
                                {startHour}-{endHour}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplaySchedule
