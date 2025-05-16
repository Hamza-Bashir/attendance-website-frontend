import {createContext, useEffect, useState} from "react"
import {setToken, getToken, removeToken} from "../utils/token"


const AuthContext = createContext()


const AuthProvider = ({children})=>{
    const [isLog, setIsLog] = useState(false)

    useEffect(()=>{
        const token = getToken()
        if(token){
            setIsLog(true)
        }

    }, [isLog])

    const login = (token)=>{
        setToken(token)
        setIsLog(true)
    }

    const logout = ()=>{
        removeToken()
        setIsLog(false)
    }

    return <AuthContext.Provider value={{isLog, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export {AuthContext, AuthProvider}


