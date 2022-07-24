import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddNewQuiz from "../add/AddNewQuiz";

const EditQuizButton = ({ onUpdate, quizID, setError, setMessage }) => {
    const [isAdd, setIsAdd] = useState(false);

    return (
        <div className="bg-white">
            <div
                className={`mb-4  p-4 shadow-md rounded-md ${
                    isAdd ? "hidden" : "flex"
                } justify-center items-center`}
            >
                <div
                    role="button"
                    onClick={() => setIsAdd(true)}
                    className="disabled:bg-gray-100 bg-opacity-80 hover:bg-opacity-100 disabled:text-gray-500 hover:cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-400 px-4 py-2   text-white uppercase  font-bold bg-red-500 text-2xl sm:text-4xl
                rounded-full h-12 w-12 sm:h-20 sm:w-20 flex items-center justify-center"
                >
                    <FaPlus />
                </div>
            </div>
            {isAdd && (
                <AddNewQuiz
                    hideForm={() => setIsAdd(false)}
                    onUpdate={onUpdate}
                    setError={setError}
                    setMessage={setMessage}
                    quizID={quizID}
                />
            )}
        </div>
    );
};

export default EditQuizButton;
