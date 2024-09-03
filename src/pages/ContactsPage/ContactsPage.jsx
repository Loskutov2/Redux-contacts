import { ContactForm } from "components/Contacts/ContactForm/ContactForm"
import { ContactList } from "components/Contacts/ContactList/ContactList"
import { ContactsFilter } from "components/Contacts/ContactsFilter/ContactsFilter"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getContacts } from "../../redux/operations"


export const ContactsPage = () => {
        const dispatch = useDispatch()
        useEffect(() => {
          dispatch(getContacts())
        }, [dispatch])
    return(
        <>
            <ContactForm/>
            <ContactsFilter/>
            <ContactList/>
        </>
    )
}