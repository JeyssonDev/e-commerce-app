import { actions } from "../actions";

const INITIAL_STATE = {
    app: {
        isUserModalOpen: false,
        isLoading: false,
        loggedUser: null,
    },
    products: [],
    categories: [],
    cart: [],
    purchases: [],
};

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.isUserModalOpen:
            return {
                ...state,
                app: {
                    ...state.app,
                    isUserModalOpen: action.payload,
                },
            };
        case actions.isLoading:
            return {
                ...state,
                app: {
                    ...state.app,
                    isLoading: action.payload,
                },
            };
        case actions.setUser:
            return {
                ...state,
                app: {
                    ...state.app,
                    loggedUser: action.payload,
                },
            };
        case actions.setCart:
            return {
                ...state,
                cart: action.payload,
            };
        case actions.setProducts:
            return {
                ...state,
                products: action.payload,
            };
        case actions.setCategories:
            return {
                ...state,
                categories: action.payload,
            };
        case actions.setPurchases:
            return {
                ...state,
                purchases: action.payload,
            };
        default:
            return state;
    }
};
