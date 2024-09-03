import { useSelector } from "react-redux"
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu"
import { AuthMenu } from "../AuthMenu/AuthMenu"
import { selectIsLoggedIn } from "../../../redux/selectors"

export const AppBar = () => {
    const loggedIn = useSelector(selectIsLoggedIn)
    return(
        <header>
            <nav>
                <Navigation/>
                {loggedIn?<UserMenu/>:<AuthMenu/>}
            </nav>
        </header>
    )
}