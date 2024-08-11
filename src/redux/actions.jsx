import { nanoid } from "@reduxjs/toolkit";

export const addContact = (name, num) => {
    return {
        type: "contacts/addContact",
        payload: {
          id: nanoid(),
          name: name,
          num: num,
        }
   }}

export const removeContact = id => {
    return {
        type: "contacts/removeContact",
        payload: id
}}

export const setFilter = text => {
    return {
        type: "filter/setFilter",
        payload: text,
   }}