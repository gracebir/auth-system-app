import { createContext, useEffect, useState } from 'react'


type appProps = {
    children: React.ReactNode
}

export const AppContext = createContext({})

export const AppProvider = ({children}: appProps) => {
    const [user, setUser] = useState("")
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