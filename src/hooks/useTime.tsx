import { getStoreTimeSchedule } from '@/utils/scheduleApi'
import { useEffect, useState } from 'react'
import { tstoreTimeSchedule } from '../../typing'

function useTime(id: number) {
    const [times, setTimes] = useState<Array<tstoreTimeSchedule>>([])
    useEffect(()=> {
        getStoreTimeSchedule(id)
        .then(data => setTimes(data!))
        .catch(err => console.log(err))
    },[])
  return times
}

export default useTime