import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../../../components";
import { useCounter } from "../../../hooks";
import {
    addProductsToCartThunk,
    setIsUserModalOpen,
} from "../../../redux/actions";

const ProductInfo = ({ product, userCart }) => {
    const dispatch = useDispatch();

    const loggedUser = useSelector((state) => state.app.loggedUser);
    const {
        counter,
        setCounter,
        handleCounterIncrement,
        handleCounterDecrement,
    } = useCounter();
    const cartProductsId = userCart.map((cartProduct) => cartProduct.id);

    const handlePurchasedProduct = () => {
        if (!loggedUser) {
            dispatch(setIsUserModalOpen(true));
        } else {
            const productToAdd = {
                id: product.id,
                quantity: counter,
            };
            dispatch(addProductsToCartThunk(productToAdd));
        }
    };

    useEffect(() => {
        setCounter(1);
    }, [product, setCounter]);

    return (
        <div className="product-info">
            <div className="brand"></div>
            <h2>{product?.title}</h2>
            <div className="product-data">
                <div className="product-options">
                    <div className="flex">
                        <div className="price">
                            <span className="label">Price</span>
                            <span className="amount">$ {product?.price}</span>
                        </div>
                        <div className="quantity">
                            {cartProductsId.includes(product?.id) ? null : (
                                <>
                                    <div className="label">Quantity</div>
                                    <Counter
                                        counter={counter}
                                        handleCounterIncrement={
                                            handleCounterIncrement
                                        }
                                        handleCounterDecrement={
                                            handleCounterDecrement
                                        }
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    {cartProductsId.includes(product?.id) ? (
                        <button className="add-cart-button" disabled={true}>
                            Added to cart{" "}
                            <i className="fa fa-cart-arrow-down"></i>
                        </button>
                    ) : (
                        <button
                            className="add-cart-button"
                            onClick={handlePurchasedProduct}
                        >
                            Add to cart <i className="fa fa-cart-shopping"></i>
                        </button>
                    )}
                </div>
                <p className="product-description">{product?.description}</p>
            </div>
        </div>
    );
};

export default ProductInfo;
