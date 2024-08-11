import { useDispatch } from "react-redux"
import { FormField, SubBtn } from "./ContactForm.stlyed"
import { addContact } from "../../redux/actions"


export const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const [name, num] = form.elements
        dispatch(addContact(name.value, num.value))
        form.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormField type="text" name="name" placeholder="Contact name"/>
            <FormField type="text" name="num" placeholder="Phone number"/>
            <SubBtn type="submit">Create</SubBtn>
        </form>
    )
}