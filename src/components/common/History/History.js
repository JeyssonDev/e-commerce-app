import React from "react";
import { Link } from "react-router-dom";
import "./History.css";

const History = ({ title }) => {
    return (
        <div className="history">
            <Link to="/">Home</Link>
            <div className="separator"></div>
            <b>{title}</b>
        </div>
    );
};

export default History;
