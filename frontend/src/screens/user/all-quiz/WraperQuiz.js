import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import QuizCard from "./QuizCard";

const WraperQuiz = ({ data, onSubmit, loading, autoSubmit }) => {
    const [quizData, setQuizData] = useState(data);
    const handleOnChange = (e) => {
        const name = Number(e.target.name);
        const value = e.target.value;
        // console.log(name, value);
        let tempObj = quizData.map((item) => {
            if (name === item.questionID) {
                let newObj = item;
                item.givenAnswer = value;
                return newObj;
            } else {
                return item;
            }
        });
        setQuizData(tempObj);
    };
    useEffect(() => {
        if (autoSubmit) {
            onSubmit(quizData);
        }
    }, [autoSubmit, onSubmit, quizData]);

    return (
        <div>
            {data.map((quiz) => (
                <QuizCard
                    key={quiz?.questionID}
                    id={quiz?.questionID}
                    content={quiz?.content}
                    option1={quiz?.option1}
                    option2={quiz?.option2}
                    option3={quiz?.option3}
                    option4={quiz?.option4}
                    onChange={handleOnChange}
                />
            ))}

            <PrimaryBtn
                onClick={() => onSubmit(quizData)}
                title="Submit"
                className="px-14"
                loading={loading}
            />
        </div>
    );
};

export default WraperQuiz;
