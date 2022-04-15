import {
    getUser,
    createUser,
    getUserAuth,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
} from "./auth.service";
import { getProducts, getFilteredProducts } from "./products.service";
import {
    getCart,
    addProductsToCart,
    editProductsFromCart,
    deleteProductsFromCart,
} from "./cart.service";
import { getCategories } from "./categories.service";
import { getPurchasesHistory, makePurchases } from "./purchases.service";

export {
    getUser,
    createUser,
    getUserAuth,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
    getProducts,
    getFilteredProducts,
    getCart,
    addProductsToCart,
    editProductsFromCart,
    deleteProductsFromCart,
    getCategories,
    getPurchasesHistory,
    makePurchases,
};
