import React, { useEffect } from "react";
import "./SearchSuggestions.css";

const SearchSuggestions = ({
    searchProduct,
    currentSuggestion,
    setCurrentSuggestion,
    allProducts,
    handleOnSelectResult,
}) => {
    const filteredProducts = allProducts.filter((product) =>
        product.title.includes(searchProduct)
    );

    useEffect(() => {
        return () => setCurrentSuggestion(-1);
    }, [setCurrentSuggestion]);

    const handleOnMouseEnter = () => {
        setCurrentSuggestion(-1);
    };

    return (
        <ul
            className="search-suggestions minimalist-scrollbar"
            onMouseEnter={handleOnMouseEnter}
        >
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                    <li
                        key={product.title}
                        className={
                            index === currentSuggestion
                                ? "product-title active-suggestion"
                                : "product-title"
                        }
                        tabIndex="0"
                        onClick={handleOnSelectResult}
                    >
                        <strong>
                            {product.title.slice(0, searchProduct.length)}
                        </strong>
                        {product.title.slice(searchProduct.length)}
                    </li>
                ))
            ) : (
                <li>
                    No matches found, also keep in mind the capital letters.
                </li>
            )}
        </ul>
    );
};

export default SearchSuggestions;
