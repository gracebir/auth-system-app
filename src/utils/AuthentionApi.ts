import axios from "axios";
import { tuserLogin, tuserRegistration } from "../../typing";

export const userRegistration = async (data: tuserRegistration) => {
    try {
        const response = await axios.post('/api/register', data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const userLogin = async ({email, password}: tuserLogin) =>{
    try {
        const response = await axios.post('/api/auth', {email, password})
        return response.data
    } catch (error) {
        console.log(error)
    }
}