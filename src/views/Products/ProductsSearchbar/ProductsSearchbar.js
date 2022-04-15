import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiltersModal from "../../../components/common/FiltersModal/FiltersModal";
import { setFilteredProductsThunk } from "../../../redux/actions";
import { getProducts } from "../../../services";
import SearchSuggestions from "./SearchSuggestions";

const ProductsSearchbar = () => {
    const dispatch = useDispatch();
    const searchContainer = useRef();
    const resultsContainer = useRef();
    const [searchProduct, setSearchProduct] = useState("");
    const [currentSuggestion, setCurrentSuggestion] = useState(-1);
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isSuggestions, setIsSuggestions] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const products = useSelector((state) => state.products);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchContainer && !searchContainer.current.contains(e.target))
                handleHideSuggestions();
        };

        window.addEventListener("mousedown", handleClickOutside);

        const getAllProducts = async () => {
            try {
                const products = await getProducts();
                setAllProducts(products);
            } catch (error) {
                console.error(error.response.data.message);
            }
        };
        getAllProducts();

        return () =>
            window.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setIsFiltersModalOpen(false);
    }, [products]);

    useEffect(() => {
        if (currentSuggestion >= 0) {
            handleScrollToSuggestion(
                resultsContainer.current.children[0].children[currentSuggestion]
                    .offsetTop
            );
        }
    }, [currentSuggestion]);

    const handleScrollToSuggestion = (position) => {
        resultsContainer.current.children[0].scrollTo({
            top: position,
            behavior: "smooth",
        });
    };

    const handleDisplaySuggestions = () => setIsSuggestions(true);

    const handleHideSuggestions = () => setIsSuggestions(false);

    const handleProductsSearchSubmit = (e) => {
        e.preventDefault();
        handleHideSuggestions();
        dispatch(
            setFilteredProductsThunk({
                priceFrom: "",
                priceTo: "",
                categoryId: "",
                searchByName: searchProduct,
            })
        );
    };

    const handleFiltersModalOpen = () =>
        setIsFiltersModalOpen(!isFiltersModalOpen);

    const handleOnChangeSearchProduct = (e) => {
        if (e.target.value && !isSuggestions) handleDisplaySuggestions();
        setSearchProduct(e.target.value);
    };

    const handleOnSelectResult = (e) => {
        setSearchProduct(e.target.textContent);
        handleHideSuggestions();
        dispatch(
            setFilteredProductsThunk({
                priceFrom: "",
                priceTo: "",
                categoryId: "",
                searchByName: e.target.textContent,
            })
        );
    };

    const handleResetSearchProduct = () => {
        setSearchProduct("");
        handleHideSuggestions();
        if (products.length < allProducts.length)
            dispatch(
                setFilteredProductsThunk({
                    priceFrom: "",
                    priceTo: "",
                    categoryId: "",
                })
            );
    };

    const handleKeyboardNavigation = (e) => {
        if (e.key === "ArrowUp") {
            if (currentSuggestion > 0)
                setCurrentSuggestion(
                    (currentSuggestion) => currentSuggestion - 1
                );
        }
        if (e.key === "ArrowDown") {
            if (currentSuggestion < allProducts.length - 1)
                setCurrentSuggestion(
                    (currentSuggestion) => currentSuggestion + 1
                );
        }
        if (e.key === "Enter") {
            if (currentSuggestion >= 0) {
                setSearchProduct(
                    resultsContainer.current.children[0].children[
                        currentSuggestion
                    ].textContent
                );
            }
        }
        if (e.key === "Escape") handleHideSuggestions();
    };

    return (
        <div ref={searchContainer} className="search-box">
            <form className="input" onSubmit={handleProductsSearchSubmit}>
                <input
                    type="text"
                    name="searchProduct"
                    value={searchProduct}
                    onChange={handleOnChangeSearchProduct}
                    onClick={handleDisplaySuggestions}
                    onKeyDown={handleKeyboardNavigation}
                    placeholder="What are you looking for?"
                    autoComplete="off"
                />
                {searchProduct && (
                    <button
                        className="clear-searchbox-btn"
                        type="button"
                        onClick={handleResetSearchProduct}
                    >
                        <i className="fa fa-xmark"></i>
                    </button>
                )}
                <button type="submit">
                    <i className="fa fa-magnifying-glass"></i>
                </button>
            </form>
            {isSuggestions && (
                <div ref={resultsContainer} className="suggestions-container">
                    <SearchSuggestions
                        searchProduct={searchProduct}
                        currentSuggestion={currentSuggestion}
                        setCurrentSuggestion={setCurrentSuggestion}
                        allProducts={allProducts}
                        handleOnSelectResult={handleOnSelectResult}
                    />
                </div>
            )}
            <button className="filter-button" onClick={handleFiltersModalOpen}>
                <i className="fa fa-filter"></i> Filters
            </button>
            <FiltersModal
                isFiltersModalOpen={isFiltersModalOpen}
                handleFiltersModalOpen={handleFiltersModalOpen}
            />
            {isFiltersModalOpen && (
                <div className="overlay" onClick={handleFiltersModalOpen}></div>
            )}
        </div>
    );
};

export default ProductsSearchbar;
