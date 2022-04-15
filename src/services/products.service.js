import axios from "axios";
import { endpoints } from "../utils";

export const getProducts = async () => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const { data } = await axios.get(endpoints.productsUrl, { signal });

        setTimeout(() => {
            controller.abort();
        }, 4000);

        return data.data.products;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getFilteredProducts = async (filters) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        let response;

        if (!filters.searchByName)
            response = await axios.get(
                endpoints.productsUrl + "?category=" + filters.categoryId,
                { signal }
            );

        if (filters.searchByName)
            response = await axios.get(
                endpoints.productsUrl + "?query=" + filters.searchByName,
                { signal }
            );

        let filteredProducts = response.data.data.products;
        if (filters.priceTo) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.price >= filters.priceFrom &&
                    product.price <= filters.priceTo
            );
        } else {
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= filters.priceFrom
            );
        }

        setTimeout(() => {
            controller.abort();
        }, 4000);

        return filteredProducts;
    } catch (error) {
        return Promise.reject(error);
    }
};
