import React, { useState } from "react";
import InputComponent from "../../../components/input/Input";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import useNetwork from "../../../hooks/useNetwork";
import { QUIZ_ENDPOINT } from "../../../routes/routes";
import AllQuizCard from "./AllQuizCard";

const DisplayAllQuizes = () => {
    const [queryString, setQueryString] = useState("");
    const { error, loading, data, message } = useNetwork(QUIZ_ENDPOINT);
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
                ) : data && data.length > 0 ? (
                    data.map((item) => (
                        <AllQuizCard
                            key={item.quizID}
                            id={item.quizID}
                            marks={item.maxMark}
                            questions={item.numberOfQuestions}
                            title={item.title}
                            active={item.active}
                            description={item.description}
                        />
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default DisplayAllQuizes;
