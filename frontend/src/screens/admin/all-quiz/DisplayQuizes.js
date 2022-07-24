import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/input/Input";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import useNetwork from "../../../hooks/useNetwork";
import { QUIZ_ENDPOINT } from "../../../routes/routes";
import AllQuizCard from "./AllQuizCard";

const DisplayAllQuizes = () => {
    const [queryString, setQueryString] = useState("");
    const { error, loading, data, message } = useNetwork(QUIZ_ENDPOINT);
    const [quiz, setQuiz] = useState(data ? data : []);

    useEffect(() => {
        if (data !== null && data.length > 0 && !queryString) setQuiz(data);
        else if (data !== null && data.length > 0 && queryString) {
            const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(queryString)
            );
            setQuiz(filtered);
        }
    }, [data, queryString, quiz]);

    return (
        <div>
            <div className="bg-white w-full p-4 rounded-md shadow-md mb-10 ">
                <InputComponent
                    placeholder="Search Quiz Category"
                    label="Search Quiz"
                    className="w-full"
                    value={queryString}
                    onChange={(e) => setQueryString(e.target.value)}
                />
            </div>

            <div>
                {loading ? (
                    <Spinner />
                ) : message ? (
                    <Message error={error}>{message}</Message>
                ) : quiz && quiz.length > 0 ? (
                    quiz.map((item) => (
                        <AllQuizCard
                            key={item.quizID}
                            quizID={item.quizID}
                            maxMark={item.maxMark}
                            numberOfQuestions={item.numberOfQuestions}
                            title={item.title}
                            active={item.active}
                            description={item.description}
                            category={item.category}
                        />
                    ))
                ) : (
                    <Message error>No Quiz Found!</Message>
                )}
            </div>
        </div>
    );
};

export default DisplayAllQuizes;
