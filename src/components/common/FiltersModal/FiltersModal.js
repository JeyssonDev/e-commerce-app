import React from "react";
import FiltersSection from "../../../views/Products/FiltersSection/FiltersSection";

const FiltersModal = ({ isFiltersModalOpen, handleFiltersModalOpen }) => {
    return (
        <div
            className={
                isFiltersModalOpen ? "filters-modal open" : "filters-modal"
            }
        >
            <button className="close" onClick={handleFiltersModalOpen}>
                <i className="fa fa-xmark"></i>
            </button>
            <h5>Filters</h5>
            <FiltersSection />
        </div>
    );
};

export default FiltersModal;
