import { storeType } from "../type"

export const fetchStore = async (id: number) => {
    if (id) {
        const response = await fetch(`/api/user/${id}`)
        const data: storeType[] = await response.json()
        return data
    }
}

export const saveStore = async (userId: number, name: string) => {
    const response = await fetch('/api/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, userId })
    })

    const data: storeType = await response.json()
    return data
}

export const updateStore = async ({ name, id }: storeType) => {
    const response = await fetch(`/api/store/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })

    const data: storeType = await response.json()
    return data
}

export const deleteStore = async (id: number) => {
    const response = await fetch(`/api/store/update/${id}`, {
        method: 'DELETE',
    })

    const data: storeType = await response.json()
    return data
}

