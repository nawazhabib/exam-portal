import React from "react";

const QuizOptionsCard = ({ children, className }) => {
    return (
        <div
            className={
                "bg-white border-gray-200 border-2 p-4 w-full shadow-md mb-5 rounded-md " +
                className
            }
        >
            {children}
        </div>
    );
};

export default QuizOptionsCard;
