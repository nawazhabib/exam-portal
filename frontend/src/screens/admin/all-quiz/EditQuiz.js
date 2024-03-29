import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import request from "../../../request/request";
import { ERR_MSG, QUIZ_ENDPOINT } from "../../../routes/routes";
import EditQuizButton from "./EditQuizButton";
import EditQuizCard from "./EditQuizCard";

const EditQuiz = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const location = useLocation();

    // const { loading, error, data, message } = useNetwork(
    //     `/question${QUIZ_ENDPOINT}${id}`
    // );

    const loadQuizQuestion = async () => {
        setLoading(true);
        setMessage("");
        setError(false);

        try {
            const res = await request.authGet({
                endpoint: `/question${QUIZ_ENDPOINT}all/${id}`,
            });
            setLoading(false);
            setData(res);
            setMessage("");
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            setMessage(typeof error === "string" ? error : ERR_MSG);
        }
    };

    useEffect(() => {
        loadQuizQuestion();
    }, []);

    return (
        <div>
            <h1 className=" texl-lg sm:text-2xl mb-2 bg-white p-4 shadow-md rounded-md border-b-2 border-primary">
                {location?.state?.title}
            </h1>
            <EditQuizButton
                onUpdate={loadQuizQuestion}
                quizID={{ quizID: Number(id) }}
            />
            {loading ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : data && data.length > 0 ? (
                data.map((item, index) => (
                    <EditQuizCard
                        key={item.questionID}
                        data={item}
                        onUpdate={loadQuizQuestion}
                        number={index}
                    />
                ))
            ) : (
                <Message error>No Question Found Found!</Message>
            )}
        </div>
    );
};

export default EditQuiz;
