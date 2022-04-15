import { actions } from "./actions";

import {
    setIsUserModalOpen,
    isLoading,
    setUser,
    createuserThunk,
    setUserThunk,
} from "./app.actions";

import {
    setProducts,
    setProductsThunk,
    setFilteredProductsThunk,
} from "./products.actions";

import { setCategories, setCategoriesThunk } from "./categories.actions";

import {
    setCart,
    setCartThunk,
    editCartThunk,
    addProductsToCartThunk,
    deleteProductsFromCartThunk,
} from "./cart.actions";

import {
    setPurchases,
    setPurchasesHistoryThunk,
    makePurchasesThunk,
} from "./purchases.actions";

export {
    actions,
    setIsUserModalOpen,
    isLoading,
    setUser,
    createuserThunk,
    setUserThunk,
    setProducts,
    setProductsThunk,
    setFilteredProductsThunk,
    setCategories,
    setCategoriesThunk,
    setCart,
    setCartThunk,
    editCartThunk,
    addProductsToCartThunk,
    deleteProductsFromCartThunk,
    setPurchases,
    setPurchasesHistoryThunk,
    makePurchasesThunk,
};
