import { useDispatch } from "react-redux"
import { ContactUnit, DelBtn } from "./Contact.styled"
import { deleteContact } from "../../../redux/operations"


export const Contact = ({contact}) => {
    const dispatch = useDispatch()
    const handleRemove = (e) => {
        e.preventDefault()
        dispatch(deleteContact(contact.id))
    }
    return(
        <ContactUnit key={contact.id}>
            <p>{contact.name}: {contact.num}</p>
            <DelBtn type="button" onClick={handleRemove}>Delete</DelBtn>
        </ContactUnit>
    )
}