import React from "react";
import { Link } from "react-router-dom";

const PurchaseItem = ({ purchasedProduct }) => {
    let total = 0;
    total +=
        purchasedProduct.productsInCart.quantity *
        Number(purchasedProduct.price);

    return (
        <li className="product-item">
            <div className="image"></div>
            <div className="name">
                <Link to={`/products/${purchasedProduct.id}`}>
                    {purchasedProduct.title}
                </Link>
            </div>
            <div className="quantity">
                <div className="box">
                    {purchasedProduct.productsInCart.quantity}
                </div>
            </div>
            <div className="price">$ {total.toFixed(2)}</div>
        </li>
    );
};

export default PurchaseItem;
