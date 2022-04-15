import { actions } from "./actions";
import {
    getUserAuth,
    getCart,
    addProductsToCart,
    editProductsFromCart,
    deleteProductsFromCart,
} from "../../services";
import { isLoading } from "./app.actions";

export const setCart = (cart) => ({
    type: actions.setCart,
    payload: cart,
});

export const setCartThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const userCart = await getCart(getUserAuth());
            dispatch(setCart(userCart));
        } catch (error) {
            dispatch(setCart([]));
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const editCartThunk = (editedProduct) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            await editProductsFromCart(editedProduct, getUserAuth());
            dispatch(setCartThunk());
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const addProductsToCartThunk = (product) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            await addProductsToCart(product, getUserAuth());
            dispatch(setCartThunk());
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const deleteProductsFromCartThunk = (productId) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            await deleteProductsFromCart(productId, getUserAuth());
            dispatch(setCartThunk());
        } catch (error) {
            console.error(error.response.data.message);
            return Promise.reject(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};
