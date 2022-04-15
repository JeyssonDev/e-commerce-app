import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addProductsToCartThunk,
    setIsUserModalOpen,
} from "../../../redux/actions";
import "./ProductCard.css";

const ProductCard = ({ product, userCart }) => {
    const dispatch = useDispatch();

    const loggedUser = useSelector((state) => state.app.loggedUser);

    const handlePurchasedProduct = () => {
        if (!loggedUser) {
            dispatch(setIsUserModalOpen(true));
        } else {
            const productToAdd = {
                id: product.id,
                quantity: 1,
            };

            dispatch(addProductsToCartThunk(productToAdd));
        }
    };

    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <div className="image">
                    <img
                        className="over"
                        src={product.productImgs[1]}
                        alt="Product model 1"
                    />
                    <img src={product.productImgs[0]} alt="Product model 2" />
                </div>
                <div className="info">
                    <span className="brand"></span>
                    <strong>{product.title}</strong>
                    <span className="price">Price</span>
                    <span className="amount">$ {product.price}</span>
                </div>
            </Link>

            {userCart
                .map((cartProduct) => cartProduct.id)
                .includes(product.id) ? (
                <button className="cart-button" disabled={true}>
                    <i className="fa fa-cart-arrow-down"></i>
                </button>
            ) : (
                <button
                    className="cart-button"
                    onClick={handlePurchasedProduct}
                >
                    <i className="fa fa-cart-shopping"></i>
                </button>
            )}
        </div>
    );
};

export default ProductCard;
