import { UPDATE_USER } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            sessionStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
