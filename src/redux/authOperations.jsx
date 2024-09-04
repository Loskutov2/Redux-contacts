import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

axios.defaults.baseURL = "https://66d4690c5b34bcb9ab3e8787.mockapi.io"

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization=''
// }

export const signUp  = createAsyncThunk(
    'auth/signUp',
    async (newUser) => {
        try{
            const res = await axios.post('/users', newUser)
            return res.data
        }
        catch (err){
            console.log(err)
        }
    }
)

export const logIn  = createAsyncThunk(
    'auth/logIn',
    async ({email, password}) => {
        try{
            const res = await axios.get('/users')
            const user = res.data.find(user=>user.email === email)
            return {user, flag: user.password===password}
        }
        catch (err){
            console.log(err)
        }
    }
)
