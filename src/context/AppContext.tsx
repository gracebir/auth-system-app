'use client'
import { contextType, openDayType, storeType, timeServiceType } from "@/lib/type"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { fetchStore } from "@/lib/queries/query"

const initialState:contextType = {}

export const AppContext = createContext(initialState)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const { data: session} = useSession()
    const [stores, setStores] = useState<Array<storeType>>([])
    const [openDay, setOpenDay] = useState<Array<openDayType>>([])
    const [timeServices, setTimeSevices] = useState<Array<timeServiceType>>([])

    useEffect(()=> {
        if(session && session.user){
            fetchStore(session.user.id)
            .then(data => setStores(data))
            .catch(err => console.log(err))
        }
    }, [session?.user])
    return (
        <AppContext.Provider value={{
            stores: stores,
            setStores,
            openDay,
            setOpenDay,
            timeServices,
            setTimeSevices
        }}>
            {children}
        </AppContext.Provider>
    )
}