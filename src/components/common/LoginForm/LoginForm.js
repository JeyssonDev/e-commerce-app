import React, { useState } from "react";
import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { setUserThunk } from "../../../redux/actions";

const LoginForm = ({ handleSwitchForm, handleToastDisplaying }) => {
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState(null);

    const handleValidateLogin = (values) => {
        let errors = {};

        if (loginError) setLoginError(null);

        if (!values.email && !values.password) setLoginError(null);
        if (!values.email.trim()) errors.email = "Field required.";
        if (!/^[a-zA-Z0-9._+-]+@[a-z]+\.[a-z]+$/.test(values.email.trim()))
            errors.email = "Invalid Email.";
        if (!values.password.trim()) errors.password = "Field required.";

        return errors;
    };
    const handleLoginSubmit = (values) => {
        dispatch(setUserThunk(values))
            .then(() => handleToastDisplaying(250))
            .catch((error) => setLoginError(error));
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validate={handleValidateLogin}
            onSubmit={handleLoginSubmit}
        >
            {({ errors }) => (
                <>
                    <Form className="LoginForm">
                        <div className="test-data">
                            <strong>Test data</strong>
                            <div className="field">
                                <i className="fa fa-envelope"></i>john@gmail.com
                            </div>
                            <div className="field">
                                <i className="fa fa-key"></i>john1234
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="email-login">Email</label>
                            <Field
                                type="text"
                                name="email"
                                id="email-login"
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
                            <label htmlFor="password-login">Password</label>
                            <Field
                                type="password"
                                name="password"
                                id="password-login"
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
                        <div className="input-container"></div>
                        {loginError && (
                            <div className="login-error-message">
                                {loginError}
                            </div>
                        )}
                        <button className="submit-login-btn" type="submit">
                            Login
                        </button>
                    </Form>
                    <div className="switch-forms">
                        Don't have an account? &nbsp;
                        <button type="button" onClick={handleSwitchForm}>
                            Sign up
                        </button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default LoginForm;
