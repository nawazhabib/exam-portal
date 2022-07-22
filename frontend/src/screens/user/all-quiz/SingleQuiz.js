import React from "react";
import { useParams } from "react-router-dom";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import Title from "../../../components/text/Title";
import useNetwork from "../../../hooks/useNetwork";
import { SINGLE_QUIZ_ENDPOINT } from "../../../routes/routes";
import Cards from "../card/Cards";
const SingleQuiz = () => {
    let { catId } = useParams();

    const { data, error, laoding, message } = useNetwork(
        `${SINGLE_QUIZ_ENDPOINT}${catId}`,
        true
    );
    return (
        <div>
            {/* title */}
            <Title
                title="Dummy Title"
                className="border-b-2 border-pruple shadow-md py-2  border-primary"
            >
                Category:{" "}
            </Title>

            {/* Cards */}
            {laoding ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {data === null || data?.length === 0 ? (
                        <Message warning>No quiz available</Message>
                    ) : (
                        data.map((item) => (
                            <div key={item.categoryID} className="">
                                <Cards
                                    title={item.title}
                                    marks={item.maxMark}
                                    desc={item.description}
                                    questions={item.numberOfQuestions}
                                    quizId={item.quizID}
                                />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default SingleQuiz;
