import {createContext, useEffect, useState} from "react"
import {setToken, getToken, removeToken} from "../utils/token"
import {jwtDecode} from "jwt-decode"


const AuthContext = createContext()


const AuthProvider = ({children})=>{
    const [isLog, setIsLog] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(()=>{
       const token = getToken()
       const storedUser = localStorage.getItem("user")

       if(token && storedUser){
        setIsLog(true)
        setUser(JSON.parse(storedUser))
       }

    }, [])

    const login = (token, userData)=>{
        setToken(token)
        setIsLog(true)
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = ()=>{
        removeToken()
        setIsLog(false)
        setUser(null)
    }

    return <AuthContext.Provider value={{isLog, login, logout, user}}>
        {children}
    </AuthContext.Provider>
}

export {AuthContext, AuthProvider}


