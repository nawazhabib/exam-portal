import React from "react";

const UserAttempCard = () => {
    return (
        <div className="p-4  bg-white shadow-md rounded-md mb-5">
            <h1 className=" text-xl sm:text-2xl text-purple-50">
                User Full Name (user@name)
            </h1>
            <p className=" text-md sm:text-base text-gray-600 ">
                Attempt Date: 22/23/23, 4:35PM
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-2">
                <p className="font-bold text-base sm:text-lg text-gray-700">
                    Marks Obtained: 50
                </p>
                <p className="font-bold text-base sm:text-lg text-gray-700">
                    Max Marks: 60
                </p>
                <p className="font-bold text-base sm:text-lg text-gray-700">
                    Questions Attempted: 6
                </p>
                <p className="font-bold text-base sm:text-lg text-gray-700">
                    Correct Answer: 6
                </p>
            </div>
        </div>
    );
};

export default UserAttempCard;
