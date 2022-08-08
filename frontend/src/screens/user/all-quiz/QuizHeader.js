import React from "react";
import Title from "../../../components/text/Title";
import QuizOptionsCard from "./QuizOptionsCard";

const QuizHeader = ({ title, numberOfQuestions, category, maxMark }) => {
    return (
        <QuizOptionsCard>
            <Title
                title={title}
                className=" p-0 mb-0 truncate capitalize font-medium "
                subtitle={category.title}
            />
            <div className="grid sm:grid-cols-2 mt-2">
                <p className="font-body text-gray-500 mb-2 sm:mb-0">
                    Number of Question{" "}
                    <span className="font-bold ">{numberOfQuestions}</span>
                </p>
                <p className="font-body text-gray-500">
                    Max Mark: <span className="font-bold ">{maxMark}</span>
                </p>
            </div>
        </QuizOptionsCard>
    );
};

export default QuizHeader;
