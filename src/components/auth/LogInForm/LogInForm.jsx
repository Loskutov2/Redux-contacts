import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/authOperations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.target;
      const [email, password] = form.elements
      dispatch(
        logIn({email: email.value, password: password.value})
      );
      form.reset();
      form.style.backgroundColor = 'rgba(255, 49, 3, 0.671)';
    };
    return(
        <form  onSubmit={handleSubmit} autoComplete="off">
            <label >
              Email
              <input type="email" name="email" />
            </label>
            <label >
              Password
              <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    )}