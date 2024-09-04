import { useDispatch } from "react-redux"
import { logOut } from "../../../redux/authActions"
import { useNavigate } from "react-router-dom"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/')
    }
    return(
        <div>
            <h1>Hello, user!</h1>   
            <button type="button" onClick={handleLogOut}>Log out</button>
        </div>
    )
}