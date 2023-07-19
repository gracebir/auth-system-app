export type storeType = {
    id: number
    name: string
    userId?: number
}

export type openDayType = {
    id?: number
    startDay: string
    endDay: string
    storeId?: number
}

export type timeServiceType = {
    id?: number
    startHour: string
    endHour: string
    dayId: number
}

export type contextType = {
    stores?: Array<storeType>
    setStores?: Dispatch<SetStateAction<storeType[]>>
    setOpenDay?: Dispatch<SetStateAction<openDayType[]>>
    openDay?: openDayType[],
    timeServices?: timeServiceType[],
    setTimeSevices?: Dispatch<SetStateAction<timeServiceType[]>>
}