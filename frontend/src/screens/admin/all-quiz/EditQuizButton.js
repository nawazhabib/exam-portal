import React from "react";
import { FaPlus } from "react-icons/fa";

const EditQuizButton = () => {
    return (
        <div className="mb-4 bg-white p-4 shadow-md rounded-md flex justify-center items-center">
            <div
                role="button"
                className="disabled:bg-gray-100 bg-opacity-80 hover:bg-opacity-100 disabled:text-gray-500 hover:cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-400 px-4 py-2   text-white uppercase  font-bold bg-red-500 text-2xl sm:text-4xl
                rounded-full h-12 w-12 sm:h-20 sm:w-20 flex items-center justify-center"
            >
                <FaPlus />
            </div>
        </div>
    );
};

export default EditQuizButton;
