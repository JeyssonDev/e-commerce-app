import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <p className="not-found"> Page not found! </p>
            <div className="tipsiz">
                <div className="tipsiz-body">
                    <div className="left-arm arm"></div>
                    <div className="face">
                        <div className="upper-face">
                            <div className="element">4</div>
                            <div className="element">0</div>
                            <div className="element">4</div>
                        </div>
                        <div className="mouth"></div>
                    </div>
                    <div className="right-arm arm"></div>
                </div>
            </div>
            <p>
                {" "}
                Maybe you want to go <Link to="/">back? </Link>
            </p>
        </div>
    );
};

export default NotFound;
