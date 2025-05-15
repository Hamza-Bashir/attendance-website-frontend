import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const signIn = (data, config)=>{
    return axios.post(`${BASE_URL}/add-user`, data, config)
}


export const logIn = (data)=>{
    return axios.post(`${BASE_URL}/login`, data)
}