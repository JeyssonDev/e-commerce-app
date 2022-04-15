import React from "react";
import "./UserModal.css";
import { userAvatar } from "../../../assets";

const UserModal = ({ children, isUserModalOpen }) => {
    return (
        <div
            className={
                isUserModalOpen
                    ? "UserModal minimalist-scrollbar open"
                    : "UserModal minimalist-scrollbar"
            }
        >
            <img className="user-avatar" src={userAvatar} alt="User avatar" />
            {children}
        </div>
    );
};

export default UserModal;
