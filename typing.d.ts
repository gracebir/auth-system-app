export type tInputType = {
    type: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    value: string | number
    name: string
    errorMsg?: string
    label: string
}

export type tDropdrownProps = {
    placeholder: string
    setPlaceholder: React.Dispatch<React.SetStateAction<string>>
    data: Array<string>
    typeDrop: string
}

export type tuserRegistration = {
    name: string
    email: string
    password: string
}

export type tuserLogin = {
    email: string
    password: string
}

export type tstoreDaySchedule = {
    id?: number
    userId: number
    startDay: string
    endDay: string
}

export type tstoreTimeSchedule = {
    id?: number
    storeId: number
    startHour: string
    endHour: string
}

export type tUserResponse = {
    id: number
    name: string
    email: string
}

export type tInitialContext = {
    user?: tUserResponse
    setUser?: Dispatch<SetStateAction<tuserRegistration>>
}