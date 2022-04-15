import React from "react";
import { useSelector } from "react-redux";

const CategoryFilter = ({ filters, handleChangeFilters }) => {
    const categories = useSelector((state) => state.categories);

    return (
        <ul className="category-filter">
            <li>
                <button
                    onClick={() => handleChangeFilters({ categoryId: "" })}
                    disabled={filters.categoryId === ""}
                >
                    All
                </button>
            </li>
            {categories.map((category) => (
                <li key={category.id}>
                    <button
                        onClick={() =>
                            handleChangeFilters({ categoryId: category.id })
                        }
                        disabled={filters.categoryId === category.id}
                    >
                        {category.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CategoryFilter;
