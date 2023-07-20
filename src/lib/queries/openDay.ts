import { openDayType } from "../type"

export const fetchOpenDay = async (id: number) => {
    const response = await fetch(`/api/store/${id}`);
    const data: openDayType[] = await response.json();
    return data
}

export const saveOpenDay = async ({ storeId, startDay, endDay }: openDayType) => {
    const response = await fetch('/api/openday', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ storeId, startDay, endDay })
    })

    const data: openDayType = await response.json()
    return data
}

export const updateOpenDay = async ({ startDay, id, endDay }: openDayType) => {
    const response = await fetch(`/api/openday/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ startDay, endDay })
    })

    const data: openDayType = await response.json()
    return data
}

export const deleteOpenDay = async (id: number) => {
    const response = await fetch(`/api/openday/update/${id}`, {
        method: 'DELETE'
    })

    const data:openDayType = await response.json()
    return data
}