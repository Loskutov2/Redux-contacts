export const signUp = ({name, email, password}) => {
    return {
    type: "auth/signUp",
    payload: {
        name,
        email,
        password
    }
}
}