import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { USER } from "./routes";

const PublicRoutes = () => {
    const { state } = useAuthContext();
    const locaiton = useLocation();

    return !state?.user ? (
        <Outlet />
    ) : (
        <Navigate to={USER} state={{ from: locaiton }} replace />
    );
};

export default PublicRoutes;
