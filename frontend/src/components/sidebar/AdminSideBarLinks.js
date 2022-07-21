import React from "react";
import {
    FiFolderPlus,
    FiHome,
    FiList,
    FiPlus,
    FiShoppingCart,
} from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import {
    ADD_CATEGORY,
    ADD_QUIZ,
    ADMIN,
    ALL_QUIZZ,
    VIEW_CATEGORY,
} from "../../routes/routes";
import SidebarLink from "./SidebarLink";

const AdminSideBarLinks = () => {
    const { pathname } = useLocation();
    let { title } = useParams();
    return (
        <>
            <SidebarLink
                path={ADMIN}
                name="Dashboard"
                icon={FiHome}
                active={pathname === `${ADMIN}`}
            />
            <SidebarLink
                path={`${ADMIN}/${ADD_CATEGORY}`}
                name="Add Category"
                active={pathname === `${ADMIN}/${ADD_CATEGORY}`}
                icon={FiFolderPlus}
            />
            <SidebarLink
                path={`${ADMIN}/${VIEW_CATEGORY}`}
                name="View Categories"
                active={pathname === `${ADMIN}/${VIEW_CATEGORY}`}
                icon={FiShoppingCart}
            />
            <SidebarLink
                path={`${ADMIN}/${ALL_QUIZZ}`}
                name="All Quiz"
                active={pathname === `${ADMIN}/${ALL_QUIZZ}`}
                icon={FiList}
            />
            <SidebarLink
                path={`${ADMIN}/${ADD_QUIZ}`}
                name="Add Quiz"
                active={pathname === `${ADMIN}/${ADD_QUIZ}`}
                icon={FiPlus}
            />
        </>
    );
};

export default AdminSideBarLinks;
