import { actions } from "./actions";
import { getUser, createUser } from "../../services";
import { setCartThunk } from "./cart.actions";

export const setIsUserModalOpen = (isOpen) => ({
    type: actions.isUserModalOpen,
    payload: isOpen,
});

export const isLoading = (loading) => ({
    type: actions.isLoading,
    payload: loading,
});

export const setUser = (user) => ({
    type: actions.setUser,
    payload: user,
});

export const setUserThunk = (credentials) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const loggedUser = await getUser(credentials);
            dispatch(setUser(loggedUser.user));
            dispatch(setCartThunk());
            dispatch(setIsUserModalOpen(false));
        } catch (error) {
            console.error(error.response.data.message);
            return Promise.reject(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const createuserThunk = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            await createUser(userData);
            const credentials = {
                email: userData.email,
                password: userData.password,
            };
            dispatch(setUserThunk(credentials));
        } catch (error) {
            console.error(error.response.data.message);
            return Promise.reject(error.response.data.message);
        } finally {
            dispatch(isLoading(false));
        }
    };
};
