import axios from "axios";
import { endpoints } from "../utils";

export const getCategories = async () => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const { data } = await axios.get(endpoints.categoriesUrl, { signal });

        setTimeout(() => {
            controller.abort();
        }, 4000);

        return data.data.categories;
    } catch (error) {
        return Promise.reject(error);
    }
};
