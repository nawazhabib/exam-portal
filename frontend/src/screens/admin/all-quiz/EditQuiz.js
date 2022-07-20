import React from "react";
import EditQuizButton from "./EditQuizButton";
import EditQuizCard from "./EditQuizCard";

const EditQuiz = () => {
    return (
        <div>
            <h1 className=" texl-lg sm:text-2xl mb-2 bg-white p-4 shadow-md rounded-md border-b-2 border-primary">
                Questions of Java Basic
            </h1>
            <EditQuizButton />
            <EditQuizCard />
            <EditQuizCard />
            <EditQuizCard />
        </div>
    );
};

export default EditQuiz;
