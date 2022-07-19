import React from "react";
import Title from "../../../components/text/Title";
import QuizOptionsCard from "./QuizOptionsCard";

const FinishedQuizCard = () => {
    return (
        <QuizOptionsCard>
            <Title
                title="Java Basic Examp"
                className=" p-0 mb-0 truncate capitalize font-medium "
                subtitle=" Date: 12/12/12"
            />
            <div className="grid sm:grid-cols-2 mt-2">
                <div>
                    <p className="font-body text-gray-500 mb-2 sm:mb-0">
                        Marks Obtained <span className="font-bold ">10</span>
                    </p>
                    <p className="font-body text-gray-500 mb-2 sm:mb-0">
                        Max Marks <span className="font-bold ">10</span>
                    </p>
                </div>
                <div>
                    <p className="font-body text-gray-500  mb-2 sm:mb-0">
                        Questions Attempt:{" "}
                        <span className="font-bold ">22</span>
                    </p>
                    <p className="font-body text-gray-500  mb-2 sm:mb-0">
                        Correct Answer: <span className="font-bold ">40</span>
                    </p>
                </div>
            </div>
        </QuizOptionsCard>
    );
};

export default FinishedQuizCard;
