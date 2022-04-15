import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makePurchasesThunk } from "../../../redux/actions";
import "./CartModal.css";
import CartModalInfo from "./CartModalInfo";
import EmptyCart from "./EmptyCart";

const CartModal = ({ isCartModalOpen, setIsCartModalOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    let total = 0;
    cart.forEach((cartProduct) => {
        total =
            total +
            Number(cartProduct.productsInCart.quantity) *
                Number(cartProduct.price);
    });

    const handleMakePurchases = async () => {
        dispatch(makePurchasesThunk());
        setIsCartModalOpen(!isCartModalOpen);
        navigate("/purchases");
        window.scrollTo(0, 0);
    };

    return (
        <div className={isCartModalOpen ? "cart-modal open" : "cart-modal"}>
            <div className="cart">
                <div className="minimalist-scrollbar">
                    <h4>Shopping cart</h4>
                    {cart.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <ul className="cart-products-list">
                            {cart.map((cartProduct) => (
                                <li key={cartProduct.id}>
                                    <CartModalInfo cartProduct={cartProduct} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="checkout-section">
                    <div className="total">
                        <span className="label">Total:</span>
                        <b>$ {total.toFixed(2)}</b>
                    </div>
                    <button
                        className="buy-button"
                        onClick={handleMakePurchases}
                        disabled={cart.length === 0}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
