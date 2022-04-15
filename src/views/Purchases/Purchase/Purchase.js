import React from "react";
import moment from "moment";
import PurchaseItem from "./PurchaseItem";

const Purchase = ({ purchasedProducts }) => {
    return (
        <div className="purchase-item">
            <div className="header">
                <b>{moment(purchasedProducts.createdAt).format("LLL")}</b>
            </div>
            <ul className="purchase-products-list">
                {purchasedProducts.cart.products.map((purchasedProduct) => (
                    <PurchaseItem
                        key={purchasedProduct.id}
                        purchasedProduct={purchasedProduct}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Purchase;
