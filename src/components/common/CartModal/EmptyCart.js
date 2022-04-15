import React from "react";
import { emptyCart } from "../../../assets";

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <img src={emptyCart} alt="Empty cart" />
            <h2>Your cart is currently empty!</h2>
            <p>
                Before proceed to checkout you must add some products to your
                cart
            </p>
        </div>
    );
};

export default EmptyCart;
