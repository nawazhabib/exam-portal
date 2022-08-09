import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../../components/container/Container";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import useNetwork from "../../../hooks/useNetwork";
import request from "../../../request/request";
import {
    EVAL_QUIZ,
    QUESTION_ENDPOINT,
    QUIZ_ENDPOINT,
    RUNNING,
} from "../../../routes/routes";
import QuizHeader from "./QuizHeader";
import TimeIndicator from "./TimeIndicator";
import WraperQuiz from "./WraperQuiz";

const OnGoingQuiz = () => {
    const navigation = useNavigate();
    const [questionLoader, setQuestionLoader] = useState(false);
    const [questionMessage, setQuestionMessage] = useState("");
    const [autoSubmit, setAutoSubmit] = useState(false);
    const { state } = useLocation();

    const { data, error, loading, message } = useNetwork(
        `${QUESTION_ENDPOINT}${QUIZ_ENDPOINT}${state?.quizId}`
    );

    const handleSubmitQuestion = (quizData) => {
        setQuestionLoader(true);
        setQuestionMessage("");
        request
            .authPost({ endpoint: EVAL_QUIZ, body: quizData })
            .then((res) => {
                setQuestionLoader(false);
                setQuestionMessage("");
                if (data !== null) {
                    navigation(`${RUNNING}/${data[0]?.quiz?.quizID}`, {
                        state: {
                            ...res,
                            title: data[0]?.quiz?.title,
                            category: data[0]?.quiz?.category?.title,
                            totalQuiz: data?.length,
                        },
                    });
                }
            })
            .catch((err) => {
                setQuestionLoader(false);
                setQuestionMessage(err);
            });
    };
    return (
        <Container>
            {loading ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : data !== null && data.length > 0 ? (
                <div className="grid  grid-cols-12 gap-4 ">
                    <div className=" col-start-1 col-span-full md:col-end-10 ">
                        {/* Quiz Header  */}
                        <QuizHeader
                            title={data[0]?.quiz?.title}
                            numberOfQuestions={data[0]?.quiz?.numberOfQuestions}
                            category={data[0]?.quiz?.category}
                            maxMark={data[0]?.quiz?.maxMark}
                        />
                        {/* Map this card Quiz Card */}
                        <WraperQuiz
                            data={data}
                            onSubmit={handleSubmitQuestion}
                            loading={questionLoader}
                            autoSubmit={autoSubmit}
                        />
                    </div>
                    <div className=" row-span-full  md:col-start-10  col-span-full   md:col-span-full ">
                        <TimeIndicator
                            onComplete={() => setAutoSubmit(true)}
                            time={1}
                        />
                    </div>
                </div>
            ) : (
                <Message error>There is no quiz available</Message>
            )}
            {questionMessage && <Message error>{questionMessage}</Message>}
        </Container>
    );
};

export default OnGoingQuiz;
