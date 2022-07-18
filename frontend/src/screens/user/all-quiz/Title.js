import React from "react";

const Title = ({ title }) => {
    return (
        <div className="text-xl uppercase text-primary flex w-full bg-white p-4 border-b-2 border-pruple shadow-md mb-5 rounded">
            <div className="text-gray-500 mr-3  ">Category:</div>
            <h1>{title}</h1>
        </div>
    );
};

export default Title;
