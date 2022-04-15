import React from "react";
import "./UserDetails.css";
import { removeUserFromLocalStorage } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setUser } from "../../../redux/actions";

const UserDetails = ({ handleUserModalOpen }) => {
    const dispatch = useDispatch();
    const loggedUser = useSelector((state) => state.app.loggedUser);

    const handleLogout = () => {
        handleUserModalOpen();
        removeUserFromLocalStorage();
        dispatch(setUser(null));
        dispatch(setCart([]));
    };

    return (
        <div className="UserDetails">
            <b>
                {loggedUser.firstName} {loggedUser.lastName}
            </b>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default UserDetails;
