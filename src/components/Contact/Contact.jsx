import { useDispatch } from "react-redux"
import { ContactUnit, DelBtn } from "./Contact.styled"
import { removeContact } from "../../redux/actions"


export const Contact = ({contact}) => {
    const dispatch = useDispatch()
    const handleRemove = (e) => {
        e.preventDefault()
        dispatch(removeContact(contact.id))
    }
    return(
        <ContactUnit key={contact.id}>
            <p>{contact.name}: {contact.num}</p>
            <DelBtn type="button" onClick={handleRemove}>Delete</DelBtn>
        </ContactUnit>
    )
}