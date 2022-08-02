import React, { useEffect } from "react";

const SideDrawer = ({ active, onClick, component: Component }) => {
    useEffect(() => {
        window.onclick = (e) => {
            e.stopPropagation();

            if (!e.target.classList.contains("authBurger")) {
                onClick();
            }
        };
    });
    return (
        <div>
            <div
                id="drawer-example"
                className={`overflow-y-auto fixed z-40 p-4 w-80 h-screen bg-white dark:bg-gray-800 transition-all  top-15 transform-none ${
                    active ? " left-0 " : "-left-full"
                }`}
                tabindex="-1"
                aria-labelledby="drawer-label"
                aria-hidden="true"
                role="dialog"
                aria-controls="drawer-example"
            >
                <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    Menu
                </h5>
                <button
                    type="button"
                    onClick={onClick}
                    data-drawer-dismiss="drawer-example"
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <Component />
            </div>
        </div>
    );
};

export default SideDrawer;
