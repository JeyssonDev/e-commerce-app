import React from "react";
import { orderHistory } from "../../../assets";

const PurchasesEmpty = () => {
    return (
        <div className="purchases-empty">
            <img src={orderHistory} alt="Order history" />
            <p>
                Your order history will live here.
                <br />
                What will your first purchase be?
            </p>
        </div>
    );
};

export default PurchasesEmpty;
