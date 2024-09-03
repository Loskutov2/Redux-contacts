import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = state => state.contacts.items
export const selectFilter = state => state.filter
export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectVisibleContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact=>contact.name.includes(filter)||contact.num.includes(filter))
    })