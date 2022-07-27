import React from "react";
import Title from "../../../components/text/Title";
import QuizInput from "./QuizInput";
import QuizOptionsCard from "./QuizOptionsCard";

const QuizCard = ({ id, content, option1, option2, option3, option4 }) => {
    const handleChanage = (event) => {
        const name = event.target.name;
        console.log(name);
        /* @TODO ==> update state value  Mon Jul 18  */
    };
    return (
        <QuizOptionsCard>
            <Title subtitle={content} />
            <div className="grid md:grid-cols-2">
                <QuizInput
                    name={id}
                    id={`${id}option1`}
                    onChnage={handleChanage}
                />
                <QuizInput
                    name={id}
                    id={`${id}option2`}
                    onChnage={handleChanage}
                />
                <QuizInput
                    name={id}
                    id={`${id}option3`}
                    onChnage={handleChanage}
                />
                <QuizInput
                    name={id}
                    id={`${id}option4`}
                    onChnage={handleChanage}
                />
            </div>
        </QuizOptionsCard>
    );
};

export default QuizCard;
