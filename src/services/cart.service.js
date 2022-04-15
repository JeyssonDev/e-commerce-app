import axios from "axios";
import { endpoints } from "../utils";

export const getCart = async (config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        const { data } = await axios.get(endpoints.cartUrl, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);

        return data.data.cart.products;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const addProductsToCart = async (product, config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        await axios.post(endpoints.cartUrl, product, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const editProductsFromCart = async (editedProduct, config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        await axios.patch(endpoints.cartUrl, editedProduct, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const deleteProductsFromCart = async (productId, config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        await axios.delete(endpoints.cartUrl + "/" + productId, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);
    } catch (error) {
        return Promise.reject(error);
    }
};
