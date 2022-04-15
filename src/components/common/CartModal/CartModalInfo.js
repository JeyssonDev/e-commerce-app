import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    deleteProductsFromCartThunk,
    editCartThunk,
} from "../../../redux/actions";
import Counter from "../Counter/Counter";
import { useCounter } from "../../../hooks";

const CartModalInfo = ({ cartProduct }) => {
    const dispatch = useDispatch();
    const [isEditQuantity, setIsEditQuantity] = useState(false);
    const {
        counter,
        setCounter,
        handleCounterIncrement,
        handleCounterDecrement,
    } = useCounter(cartProduct.productsInCart.quantity);

    const total =
        cartProduct.productsInCart.quantity * Number(cartProduct.price);

    const handleChangeToEditQuantity = () => setIsEditQuantity(!isEditQuantity);
    const handleEditQuantity = () => {
        const editedProduct = {
            id: cartProduct.id,
            newQuantity: counter,
        };
        dispatch(editCartThunk(editedProduct)).then(() =>
            handleChangeToEditQuantity()
        );
    };
    const handleDeleteProductsFromCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductsFromCartThunk(cartProduct.id))
                    .then(() => Swal.fire("Deleted!", "", "success"))
                    .catch(() => {
                        Swal.fire("Error!", "Something went wrong", "error");
                    });
            }
        });
    };

    useEffect(() => {
        setCounter(cartProduct.productsInCart.quantity);
    }, [isEditQuantity, setCounter, cartProduct.productsInCart.quantity]);

    return (
        <>
            <div className="product-info">
                <div className="details">
                    <span className="brand">{cartProduct.brand}</span>
                    <Link to={`/products/${cartProduct.id}`} className="name">
                        {cartProduct.title}
                    </Link>
                    {!isEditQuantity && (
                        <div className="quantity">
                            {cartProduct.productsInCart.quantity}
                        </div>
                    )}
                    {isEditQuantity && (
                        <div className="edit-quantity">
                            <Counter
                                counter={counter}
                                handleCounterIncrement={handleCounterIncrement}
                                handleCounterDecrement={handleCounterDecrement}
                            />
                            <button
                                className="button-confirm"
                                onClick={handleEditQuantity}
                            >
                                <i className="fa fa-check"></i>
                            </button>
                        </div>
                    )}
                </div>
                <div className="buttons">
                    <button
                        className={
                            isEditQuantity ? "button-cancel" : "button-edit"
                        }
                        onClick={handleChangeToEditQuantity}
                    >
                        {isEditQuantity ? (
                            <i className="fa fa-xmark"></i>
                        ) : (
                            <i className="fa fa-pen-to-square"></i>
                        )}
                    </button>
                    <button
                        className="button-delete"
                        onClick={handleDeleteProductsFromCart}
                    >
                        <i className="fa fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div className="total">
                <span className="label">Total: </span>
                <b>$ {total.toFixed(2)}</b>
            </div>
        </>
    );
};

export default CartModalInfo;
