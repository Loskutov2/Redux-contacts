import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = state => state.contacts
export const selectFilter = state => state.filter

export const selectVisibleContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact=>contact.name.includes(filter)||contact.num.includes(filter))
    })