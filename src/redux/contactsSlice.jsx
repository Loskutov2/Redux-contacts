import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: [
        {
            id: 1,
            name: "Boris",
            num: "+380 823 323 23"
        }
    ],
    reducers: {
        addContact(state, action){
            state.push(action.payload)
            return state
        },
        removeContact(state, action){
            return state.filter(task=>task.id!==action.payload)
        }
    }
})

export const { addContact, removeContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer