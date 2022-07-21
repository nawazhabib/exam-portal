import { UPDATE_USER } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload };

        default:
            return state;
    }
};
