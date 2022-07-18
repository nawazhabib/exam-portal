import React from "react";

const Title = ({ title, subtitle, children, className }) => {
    return (
        <div
            className={` text-xl sm:text-2xl md:text-2xl uppercase text-blue-700  w-full bg-white mb-3 rounded ${className}`}
        >
            <div>
                <div>
                    {" "}
                    {children && (
                        <span className="text-gray-500 mr-3  "></span>
                    )}{" "}
                    {children} <span className="truncate">{title}</span>
                </div>
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
