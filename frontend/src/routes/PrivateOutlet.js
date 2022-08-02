import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { LOGIN } from "./routes";

const PrivateOutlet = ({ allowed }) => {
    const { state } = useAuthContext();
    const locaiton = useLocation();

    return state?.user &&
        allowed.includes(state?.user?.authorities[0]?.authority) ? (
        <Outlet />
    ) : state?.user ? (
        <Navigate to="/unauthorized" state={{ from: locaiton }} replace />
    ) : (
        <Navigate to={LOGIN} state={{ from: locaiton }} replace />
    );
};

export default PrivateOutlet;
