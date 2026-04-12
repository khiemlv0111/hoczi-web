"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type User = {
    id: number,
    email: string,
    username: string,
    name: string,
}


type AppContextType = {
    data: any,
    user: User | undefined,
    login: (loginData: any) => void;
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {

        const [data, setData] = useState<any>({name: "Toan Le", email: "toan@Gmail.com"});
        const [user, setUser] = useState<User|undefined>(undefined);

        const login = () => {
            setUser({
                id: 1,
                name: "Toan Le",
                email: "toan@Gmail.com",
                username: "letoan"
            })

        }
    


    return (
        <AppContext.Provider value={{ data, user, login }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppData() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("App Data must be used inside PageProvider")
    }
    return context
}