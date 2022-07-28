import React from "react";
import Title from "../../../components/text/Title";
import QuizInput from "./QuizInput";
import QuizOptionsCard from "./QuizOptionsCard";

const QuizCard = ({
    id,
    content,
    option1,
    option2,
    option3,
    option4,
    onChange,
}) => {
    return (
        <QuizOptionsCard>
            <Title subtitle={content} />
            <div className="grid md:grid-cols-2">
                <QuizInput
                    name={id}
                    id={`${id}option1`}
                    onChange={onChange}
                    label={option1}
                    value={option1}
                />
                <QuizInput
                    name={id}
                    id={`${id}option2`}
                    onChange={onChange}
                    label={option2}
                    value={option2}
                />
                <QuizInput
                    name={id}
                    id={`${id}option3`}
                    onChange={onChange}
                    label={option3}
                    value={option3}
                />
                <QuizInput
                    name={id}
                    id={`${id}option4`}
                    onChange={onChange}
                    label={option4}
                    value={option4}
                />
            </div>
        </QuizOptionsCard>
    );
};

export default QuizCard;
