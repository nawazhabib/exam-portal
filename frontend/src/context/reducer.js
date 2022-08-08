import { HIDE_TOAST, REMOVE_USER, SHOW_TOAST, UPDATE_USER } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            sessionStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        case REMOVE_USER:
            return { ...state, user: null };
        case SHOW_TOAST:
            return { ...state, toast: action.payload };
        case HIDE_TOAST:
            return { ...state, toast: null };
        default:
            return state;
    }
};
