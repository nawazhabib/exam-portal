import React from "react";

const QuizOptionsCard = ({ children }) => {
    return (
        <div className="bg-white border-gray-200 border-2 p-4 w-full shadow-md mb-5">
            {children}
        </div>
    );
};

export default QuizOptionsCard;
