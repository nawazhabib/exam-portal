import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { LOGIN } from "./routes";

const PrivateOutlet = ({ children }) => {
    const { state } = useAuthContext();
    return state.user ? <Outlet /> : <Navigate to={LOGIN} />;
};

export default PrivateOutlet;
