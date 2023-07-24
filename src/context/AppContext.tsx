'use client'
import { contextType, storeType } from "@/lib/type"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { fetchStore } from "@/lib/queries/query"

const initialState:contextType = {}

export const AppContext = createContext(initialState)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const { data: session} = useSession()
    const [stores, setStores] = useState<Array<storeType>>([])

    useEffect(()=> {
        if(session && session.user){
            fetchStore(session.user.id)
            .then(data => setStores(data!))
            .catch(err => console.log(err))
        }
    }, [session?.user])
    return (
        <AppContext.Provider value={{
            stores: stores,
            setStores,
        }}>
            {children}
        </AppContext.Provider>
    )
}