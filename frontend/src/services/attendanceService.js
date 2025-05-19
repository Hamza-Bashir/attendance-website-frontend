import axios from "axios"
import {getToken} from "../utils/token"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const checkIn = ()=>{
    const token = getToken()
    return axios.post(`${BASE_URL}/add-attendance`, {}, {
        headers:{
            Authorization:`Bearer ${token}`,
        'Content-Type':"application/json"
        }
    })
}