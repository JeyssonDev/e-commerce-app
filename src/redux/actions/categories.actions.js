import { actions } from "./actions";
import { getCategories } from "../../services";

export const setCategories = (categories) => ({
    type: actions.setCategories,
    payload: categories,
});

export const setCategoriesThunk = () => {
    return async (dispatch) => {
        try {
            const categories = await getCategories();
            dispatch(setCategories(categories));
        } catch (error) {
            console.error(error.response.data.message);
        }
    };
};
