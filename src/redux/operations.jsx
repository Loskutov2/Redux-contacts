import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://66d4690c5b34bcb9ab3e8787.mockapi.io'

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    try {
        const res = await axios.get('/contacts')
        return res.data        
    } catch (err) {
        console.log(err)
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async ({name, num}) => {
    try {
        const newContact = await axios.post("/contacts", {name, num})
        return newContact    
    } catch (err) {
        console.log(err)
    }
}) 

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    try {
        const deleteContact = await axios.delete(`/contacts/${id}`)
        return deleteContact   
    } catch (err) {
        console.log(err)
    }
}) 