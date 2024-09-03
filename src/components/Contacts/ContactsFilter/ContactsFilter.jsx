import { useDispatch } from "react-redux"
import { FilterField } from "./ContactsFilter.styled"
import { setFilter } from "../../../redux/actions"


export const ContactsFilter = () => {
    const  dispatch = useDispatch()
    const hangleFilterSet = (e) => {
        e.preventDefault()
        dispatch(setFilter(e.target.value))
    }
    return(
        <FilterField placeholder="Search" onChange={hangleFilterSet}/>
    )
}