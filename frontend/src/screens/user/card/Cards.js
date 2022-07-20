import React from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";

const Cards = ({ title, marks, desc, questions }) => {
    return (
        <div className="bg-white border  border-gray-200 shadow-lg p-3 rounded-md">
            <h1 className="text-gray-700 text-xl capitalize font-semibold mb-4 ">
                {title}
            </h1>
            <p className="font-light text-gray-500 mb-2 line-clamp-2 ">
                {desc}
            </p>

            <div className="flex gap-4 mb-4">
                <p className="text-gray-700">
                    <span className="font-bold text-primary">{questions}</span>{" "}
                    Questions{" "}
                </p>
                <p className="text-gray-700">
                    Max Marks{" "}
                    <span className="font-bold text-green">{marks}</span>
                </p>
            </div>
            <PrimaryBtn title="Start" className=" font-bold text-sm" />
        </div>
    );
};

export default Cards;