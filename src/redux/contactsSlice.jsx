import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.isLoading=true
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            state.items = action.payload
        })
        .addCase(getContacts.rejected, (state, action) =>{
            state.error = action.payload
        })

        .addCase(addContact.pending, (state) => {
            state.isLoading=true
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            state.items.push(action.payload.data)
        })
        .addCase(addContact.rejected, (state, action) =>{
            state.error = action.payload
        })

        .addCase(deleteContact.pending, (state) => {
            state.isLoading=true
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading=false
            state.error = null
            const ContactIdx = state.items.findIndex(item=>item.id === action.payload.data.id)
            state.items.splice(ContactIdx, 1)
        })
        .addCase(deleteContact.rejected, (state, action) =>{
            state.error = action.payload
        })}
})

export const contactsReducer = contactsSlice.reducer