import { timeServiceType } from "../type"

export const fetchTimeService = async (id: number) => {
    const response = await fetch(`/api/openday/${id}`);
    const data: timeServiceType[] = await response.json();
    return data
}


export const saveTimeService = async ({ dayId, startHour, endHour }: timeServiceType) => {
    const response = await fetch('/api/timeservice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ startHour, endHour, dayId })
    })

    const data: timeServiceType = await response.json()
    return data
}


export const updateTimeService = async ({ startHour, id, endHour }: timeServiceType) => {
    const response = await fetch(`/api/timeservice/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ startHour, endHour })
    })

    const data: timeServiceType = await response.json()
    return data
}


export const deleteTimeService= async (id: number) => {
    const response = await fetch(`/api/timeservice/update/${id}`, {
        method: 'DELETE'
    })

    const data = await response.json()
    return data
}