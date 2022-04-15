import React from "react";
import "./Toast.css";

const Toast = ({ isToastDisplaying, background, message }) => {
    return (
        <div
            className={isToastDisplaying ? "toast open" : "toast"}
            style={{ background }}
        >
            <p className="toast-message">{message}</p>
        </div>
    );
};

export default Toast;
