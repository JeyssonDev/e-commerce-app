import React, { useState } from "react";
import "./SignupForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createuserThunk } from "../../../redux/actions";
import { signupValidation } from "../../../utils";

const SignupForm = ({ handleSwitchForm, handleToastDisplaying }) => {
    const dispatch = useDispatch();
    const [signupError, setSignupError] = useState(null);

    return (
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                confirmPassword: "",
                phone: "",
            }}
            validate={(values) =>
                signupValidation(values, { signupError, setSignupError })
            }
            onSubmit={(values) => {
                dispatch(createuserThunk(values))
                    .then(() => {
                        handleToastDisplaying(800);
                        handleSwitchForm();
                    })
                    .catch((error) => setSignupError(error));
            }}
        >
            {({ errors }) => (
                <>
                    <Form className="SignupForm">
                        <div
                            className={
                                signupError
                                    ? "input-container error"
                                    : "input-container"
                            }
                        >
                            <label htmlFor="email-signup">Email</label>
                            <Field
                                type="text"
                                name="email"
                                id="email-signup"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="email"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.email}
                                    </small>
                                )}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="firstname">First Name</label>
                            <Field
                                type="text"
                                name="firstName"
                                id="firstname"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="firstName"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.firstName}
                                    </small>
                                )}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastname">Last Name</label>
                            <Field
                                type="text"
                                name="lastName"
                                id="lastname"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="lastName"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.lastName}
                                    </small>
                                )}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password-signup">Password</label>
                            <Field
                                type="password"
                                name="password"
                                id="password-signup"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="password"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.password}
                                    </small>
                                )}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="confirmpassword">
                                Confirm Password
                            </label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                id="confirmpassword"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.confirmPassword}
                                    </small>
                                )}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone">Phone</label>
                            <Field
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="off"
                            />
                            <ErrorMessage
                                name="phone"
                                component={() => (
                                    <small className="input-error-message">
                                        {errors.phone}
                                    </small>
                                )}
                            />
                        </div>
                        {signupError && (
                            <div className="signup-error-message">
                                {signupError}
                            </div>
                        )}
                        <button className="submit-signup-btn" type="submit">
                            Sign up
                        </button>
                    </Form>
                    <div className="switch-forms">
                        Have an account? &nbsp;
                        <button type="button" onClick={handleSwitchForm}>
                            Log in
                        </button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default SignupForm;
