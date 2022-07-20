import React from "react";
import UserAttempCard from "./UserAttempCard";

const UserAttempt = () => {
    return (
        <div>
            <div className="bg-white rounded-md shadow-md mb-3 p-4">
                <h1 className="text-2xl mb-1 text-blue-500">
                    Java Basic Quiz (6){" "}
                </h1>
                <p className="text-base text-gray-700 mb-3">Programming</p>
            </div>
            <UserAttempCard />
            <UserAttempCard />
            <UserAttempCard />
        </div>
    );
};

export default UserAttempt;
