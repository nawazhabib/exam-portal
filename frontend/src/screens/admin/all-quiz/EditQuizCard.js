import React from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";

const EditQuizCard = () => {
    const handleDelete = (e) => {};
    return (
        <div className="bg-white p-3 shadow-md rounded-md mb-4">
            <p className="text-lg mb-4 text-gray-800 ">
                Q.1{")"} What is Class?
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 border-b border-gray-400 pb-2">
                <p className="text-gray-700">1{")"} Logical Entity </p>
                <p className="text-gray-700">2{")"} Logical Entity </p>
                <p className="text-gray-700">3{")"} Logical Entity </p>
                <p className="text-gray-700">4{")"} Logical Entity </p>
            </div>
            <p className="text-green-400 mt-3 mb-3 ">Correct Answer: Answer</p>

            <PrimaryBtn
                title="Delete"
                onClick={handleDelete}
                bg="bg-red-700"
                className="mt-3"
            />
        </div>
    );
};

export default EditQuizCard;
