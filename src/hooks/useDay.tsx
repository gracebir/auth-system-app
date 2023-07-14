import { getStoreDaySchedule } from '@/utils/scheduleApi'
import { useEffect, useState } from 'react'
import { tstoreDaySchedule } from '../../typing'

function useDay(id: number) {
    const [days, setDays] = useState<Array<tstoreDaySchedule>>([])
    useEffect(()=> {
        getStoreDaySchedule(id)
        .then(data => setDays(data!))
        .catch(err => console.log(err))
    },[])
  return days[0]
}

export default useDay
