import React from "react";

const Counter = ({
    counter,
    handleCounterIncrement,
    handleCounterDecrement,
}) => {
    return (
        <div className="flex">
            <button onClick={handleCounterDecrement} disabled={counter <= 1}>
                <i className="fa fa-minus"></i>
            </button>
            <div className="value">{counter}</div>
            <button onClick={handleCounterIncrement}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    );
};

export default Counter;
