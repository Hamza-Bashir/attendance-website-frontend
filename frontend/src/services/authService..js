import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const signIn = (data)=>{
    return axios.post(`${BASE_URL}/add-user`, data)
}