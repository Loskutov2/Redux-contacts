import { NavLink } from "react-router-dom"

export const AuthMenu = () => {
    return(
        <div>
            <NavLink to="/registration">Sing up</NavLink>
            <NavLink to="/login">Log in</NavLink>
        </div>
    )
}