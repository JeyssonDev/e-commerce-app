export const signupValidation = (values, { signupError, setSignupError }) => {
    const { email, firstName, lastName, password, confirmPassword, phone } =
        values;
    let errors = {};

    if (signupError) setSignupError(null);

    if (!email.trim()) errors.email = "Field required.";
    if (email.trim() && !/^[a-zA-Z0-9_.+-]+@[a-z]+\.[a-z]+$/.test(email))
        errors.email = "Invalid Email.";
    if (!firstName.trim()) errors.firstName = "Field required.";
    if (!lastName.trim()) errors.lastName = "Field required.";
    if (!password.trim()) errors.password = "Field required.";
    if (
        password.trim() &&
        (!/[a-zA-Z]+/.test(password) || !/[0-9]+/.test(password))
    )
        errors.password = "Password must include letters and numbers";
    if (password.trim() && password.length < 8)
        errors.password = "Password must be 8 characters long.";
    if (!confirmPassword.trim()) errors.confirmPassword = "Field required.";
    if (password.trim() && confirmPassword && password !== confirmPassword)
        errors.confirmPassword = "Must be the same password.";
    if (confirmPassword.trim() && errors.password)
        errors.confirmPassword = "Invalid password.";
    if (!phone.trim()) errors.phone = "Field required.";
    if (phone.trim() && phone.length !== 10)
        errors.phone = "Must be 10 digits long.";
    if (phone.trim() && isNaN(Number(phone)))
        errors.phone = "Invalid phone, must be digits.";

    return errors;
};
