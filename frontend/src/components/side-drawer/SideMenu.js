import React, { useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import SideDrawer from "./SideDrawer";

const SideMenu = ({ component: Component }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="my-5  sm:hidden ">
            <button className="text-2xl p-1 border border-primary shadow text-primary rounded drop-shadow-md bg-white authBurger">
                <BsReverseLayoutTextSidebarReverse
                    onClick={() => setActive(true)}
                    className="authBurger"
                />
            </button>

            <SideDrawer
                active={active}
                onClick={() => setActive(false)}
                component={Component}
            />
        </div>
    );
};

export default SideMenu;
