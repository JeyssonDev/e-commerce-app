import { actions } from "./actions";
import {
    getUserAuth,
    getPurchasesHistory,
    makePurchases,
} from "../../services";
import { isLoading } from "./app.actions";
import { setCartThunk } from "./cart.actions";

export const setPurchases = (purchasesHistory) => ({
    type: actions.setPurchases,
    payload: purchasesHistory,
});

export const setPurchasesHistoryThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const purchasesHistory = await getPurchasesHistory(getUserAuth());
            dispatch(setPurchases(purchasesHistory));
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const makePurchasesThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            await makePurchases({}, getUserAuth());
            dispatch(setCartThunk());
            dispatch(setPurchasesHistoryThunk());
        } catch (error) {
            console.error(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};
