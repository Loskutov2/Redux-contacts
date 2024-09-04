import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/authOperations";

export const SignUpForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(
          signUp({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
      };
  return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label >
          Email
          <input type="email" name="email" />
        </label>
        <label >
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  };