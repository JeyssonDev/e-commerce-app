import axios from "axios";
import { endpoints } from "../utils";

export const getPurchasesHistory = async (config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        const { data } = await axios.get(endpoints.purchasesUrl, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);

        return data.data.purchases.reverse();
    } catch (error) {
        return Promise.error(error);
    }
};

export const makePurchases = async (order, config) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        config.signal = signal;

        await axios.post(endpoints.purchasesUrl, order, config);

        setTimeout(() => {
            controller.abort();
        }, 4000);
    } catch (error) {
        return Promise.reject(error);
    }
};
