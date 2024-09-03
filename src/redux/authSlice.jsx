import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    reducers: {
        signUp(state, action){
            state.user = action.payload
            state.isLoggedIn = true
        }
    }
})

export const  authReduser  = authSlice.reducer
export const {signUp} = authSlice.actions