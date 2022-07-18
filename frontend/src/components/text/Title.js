import React from "react";

const Title = ({ title, subtitle, children, className }) => {
    return (
        <div
            className={` uppercase text-blue-700  w-full bg-white mb-3 rounded ${className}`}
        >
            <div className="flex">
                {children && (
                    <div className="text-gray-500 mr-3  ">{children}</div>
                )}
                <h1 className="truncate">{title}</h1>
            </div>

            {
                <p className=" text-sm sm:text-base text-gray-500 mb-3">
                    {subtitle}
                </p>
            }
        </div>
    );
};

export default Title;
