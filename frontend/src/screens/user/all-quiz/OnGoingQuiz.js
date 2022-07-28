import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
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
import QuizCard from "./QuizCard";
import QuizHeader from "./QuizHeader";
import TimeIndicator from "./TimeIndicator";

const OnGoingQuiz = () => {
    const navigation = useNavigate();
    const [questionLoader, setQuestionLoader] = useState(false);
    const [questionMessage, setQuestionMessage] = useState("");

    const { state } = useLocation();
    const [quizData, setQuizData] = useState([]);
    const { data, error, loading, message } = useNetwork(
        `${QUESTION_ENDPOINT}${QUIZ_ENDPOINT}${state?.quizId}`
    );
    useEffect(() => {
        if (data !== null) {
            setQuizData(data);
        }
    }, [data]);

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
    const handleSubmitQuestion = () => {
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
                console.log(err, "errr");
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
                            onClick={handleSubmitQuestion}
                            title="Submit"
                            className="px-14"
                            loading={questionLoader}
                        />
                    </div>
                    <div className=" row-span-full  md:col-start-10  col-span-full   md:col-span-full ">
                        <TimeIndicator time={data?.length} />
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
