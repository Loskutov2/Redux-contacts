import { useDispatch } from "react-redux"
import { FormField, SubBtn } from "./ContactForm.stlyed"
import { addContact } from "../../../redux/operations"


export const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const [name, num] = form.elements
        dispatch(addContact({name:name.value, num:num.value}))
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