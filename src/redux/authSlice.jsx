import { createSlice } from "@reduxjs/toolkit";
import { logIn, signUp } from "./authOperations";
import { useNavigate } from "react-router-dom";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null
    },
    reducers: {
        logOut(state){
            return {...state, isLoggedIn:false, user: { name: null, email: null, password: null }}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signUp.pending, (state) => {
            state.isRefreshing=true
        })
        .addCase(signUp.fulfilled, (state, action) => {
            const navigate = useNavigate()
            state.isRefreshing=false
            state.user = action.payload
            state.isLoggedIn = true
            navigate("/")
        })
        .addCase(signUp.rejected, (state, action) =>{
            state.error = action.payload
        })

        .addCase(logIn.pending, (state) => {
            state.isRefreshing=true
        })
        .addCase(logIn.fulfilled, (state, action) => {
            const navigate = useNavigate()
            if(action.payload.flag){
                state.user = action.payload.user
                state.isLoggedIn = true
                navigate("/")
            }
            state.isRefreshing=false

        })
        .addCase(logIn.rejected, (state, action) =>{
            state.error = action.payload
        })  
    }
})


export const  authReduser  = authSlice.reducer