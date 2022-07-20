import React from "react";
import { FaFolder } from "react-icons/fa";
const ViewCategoriesCard = () => {
    return (
        <div className=" pl-2  bg-white flex gap-4 items-center py-3 border-b border-gray-400 hover:bg-gray-100 cursor-pointer">
            <div className="text-xl text-black">
                <FaFolder />
            </div>
            <div>
                <h2 className="text-lg text-gray-800">Programming</h2>
                <p className="text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, quas.
                </p>
            </div>
        </div>
    );
};

export default ViewCategoriesCard;
