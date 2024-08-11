import { Contact } from "components/Contact/Contact"
import { useSelector } from "react-redux"
import { selectVisibleContacts } from "../../redux/selectors"
import { List } from "./ContactList.styled"


export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    return(
        <List>
            {visibleContacts.map(contact=><Contact contact={contact}/>)}
        </List>
    )
}