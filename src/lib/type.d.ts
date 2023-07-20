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

export type openDayProps = {
    id?: number
    startDay: string
    endDay: string
    storeId?: number
    setOpenDays: Dispatch<SetStateAction<openDayType[]>>
    openDays: openDayType[]
}

export type timeServiceType = {
    id?: number
    startHour: string
    endHour: string
    dayId: number
}

export type typeTimeServiceProps = {
    id?: number
    startHour: string
    endHour: string
    dayId: number
    setTimeSevices: Dispatch<SetStateAction<timeServiceType[]>>
    timeServices: timeServiceType[]
}

export type contextType = {
    stores?: Array<storeType>
    setStores?: Dispatch<SetStateAction<storeType[]>>
}

export type tDropdrownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    data: Array<string>
    isStart?: boolean
}

export type typeOpenDayForm = {
    setOpenDays: Dispatch<SetStateAction<openDayType[]>>
    openDays: openDayType[]
    storeId: number
}

export type typeTimeServiceForm = {
    setTimeSevices: Dispatch<SetStateAction<timeServiceType[]>>
    timeServices: timeServiceType[]
    dayId: number
}
