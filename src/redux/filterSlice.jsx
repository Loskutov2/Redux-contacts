import { createSlice} from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        setFilter(state, action){
            return action.payload
        }
    }
})
// reducer - функція яка приймає 2 аргумента - state, action і повертає стейт (оновлений або неоновлений)
export const {setFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer
