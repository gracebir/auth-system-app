import axios from "axios";
import { tstoreDaySchedule, tstoreTimeSchedule } from "../../typing";

export const saveStoreTimeSchedule  = async ({startHour, endHour, storeId}: tstoreTimeSchedule) => {
    try {
        const response = await axios.post(`/api/time`, {
            startHour,
            endHour,
            storeId
        })
        const data: tstoreTimeSchedule = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const saveStoreDaySchedule = async ({startDay, endDay, userId}: tstoreDaySchedule) => {
    try {
        const response = await axios.post('/api/store', {
            startDay,
            endDay,
            userId
        })
        const data: tstoreDaySchedule = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}


export const getStoreDaySchedule = async (id: number) => {
    try {
        const response = await axios.get(`/api/store/${id}`)
        const data: tstoreDaySchedule[] = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getStoreTimeSchedule = async (id: number) => {
    try {
        const response = await axios.get(`/api/time/${id}`)
        const data: tstoreTimeSchedule[] = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}