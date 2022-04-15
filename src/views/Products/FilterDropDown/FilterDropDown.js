import React, { useState } from "react";
import "./FilterDropDown.css";

const FilterDropDown = ({ children, header, isShowingContent }) => {
    const [showContent, setShowContent] = useState(isShowingContent);

    const handleShowContent = () => setShowContent(!showContent);

    return (
        <div
            className={showContent ? "FilterDropDown" : "FilterDropDown closed"}
        >
            <div className="header" onClick={handleShowContent}>
                <span>{header}</span>
                <i className="fa fa-angle-down"></i>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default FilterDropDown;
