import React from "react";
import Title from "../../../components/text/Title";
import QuizInput from "./QuizInput";
import QuizOptionsCard from "./QuizOptionsCard";

const QuizCard = () => {
    const handleChanage = (event) => {
        const name = event.target.name;
        console.log(name);
        /* @TODO ==> update state value  Mon Jul 18  */
    };
    return (
        <QuizOptionsCard>
            <Title subtitle="What is Class" />
            <div className="grid md:grid-cols-2">
                {[1, 2, 3, 4].map((item, index) => (
                    <QuizInput
                        key={index}
                        name="quiz"
                        id={item}
                        onChnage={handleChanage}
                    />
                ))}
            </div>
        </QuizOptionsCard>
    );
};

export default QuizCard;
