import { actions } from "./actions";
import { getProducts, getFilteredProducts } from "../../services";
import { isLoading } from "./app.actions";

export const setProducts = (products) => ({
    type: actions.setProducts,
    payload: products,
});

export const setProductsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const products = await getProducts();
            dispatch(setProducts(products));
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const setFilteredProductsThunk = (filters) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const filteredProducts = await getFilteredProducts(filters);
            dispatch(setProducts(filteredProducts));
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};
