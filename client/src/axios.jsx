import axios from "axios";


export const makeRequest = axios.create({
    baseURL:"https://thriveultimate-zgn3.vercel.app/api/v1",
    withCredentials:true

})