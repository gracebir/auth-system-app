import { createContext, useEffect, useState } from 'react'
import { tInitialContext, tUserResponse } from '../../typing'


type appProps = {
    children: React.ReactNode
}

const initialState: tInitialContext = {}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}: appProps) => {
    const [user, setUser] = useState<tUserResponse>()
    useEffect(()=>{
        if(localStorage.getItem("user")){
            const item = JSON.parse(localStorage.getItem('user')!)
            setUser({...item})
        }
    },[])
    return (
        <AppContext.Provider value={{
            user,
            setUser: setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}