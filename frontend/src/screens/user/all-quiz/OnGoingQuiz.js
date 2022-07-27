import React from "react";
import { useLocation } from "react-router-dom";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import Container from "../../../components/container/Container";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import useNetwork from "../../../hooks/useNetwork";
import { QUESTION_ENDPOINT, QUIZ_ENDPOINT } from "../../../routes/routes";
import QuizCard from "./QuizCard";
import QuizHeader from "./QuizHeader";
import TimeIndicator from "./TimeIndicator";

const OnGoingQuiz = () => {
    const { state } = useLocation();

    const { data, error, loading, message } = useNetwork(
        `${QUESTION_ENDPOINT}${QUIZ_ENDPOINT}${state?.quizId}`
    );
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
                            />
                        ))}

                        <PrimaryBtn title="Submit" className="px-14" />
                    </div>
                    <div className=" row-span-full  md:col-start-10  col-span-full   md:col-span-full ">
                        <TimeIndicator />
                    </div>
                </div>
            ) : (
                <Message error>There is no quiz available</Message>
            )}
        </Container>
    );
};

export default OnGoingQuiz;
