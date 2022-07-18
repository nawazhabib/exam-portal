import React from "react";
import Title from "../../../components/text/Title";
import QuizOptionsCard from "./QuizOptionsCard";

const QuizHeader = () => {
    return (
        <QuizOptionsCard>
            <Title
                title="Java Basic Examp"
                className=" p-0 mb-0 truncate capitalize font-medium  text-xl sm:text-2xl md:text-2xl"
                subtitle=" programming Hero"
            />
            <div className="grid sm:grid-cols-2 mt-2">
                <p className="font-body text-gray-500 mb-2 sm:mb-0">
                    Number of Question <span className="font-bold ">10</span>
                </p>
                <p className="font-body text-gray-500">
                    Max Mark: <span className="font-bold ">100</span>
                </p>
            </div>
        </QuizOptionsCard>
    );
};

export default QuizHeader;
