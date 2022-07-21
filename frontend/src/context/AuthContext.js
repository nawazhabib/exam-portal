import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import initialState from "./store";

const UserContext = createContext();

export const useAuthContext = () => useContext(UserContext);

const AuthContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default AuthContext;
