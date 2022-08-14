import React, { useState } from "react";
import { BsFillSunriseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import Spinner from "../../../components/spinner/Spinner";
import Switch from "../../../components/switch/Switch";
import Title from "../../../components/text/Title";
import { useAuthContext } from "../../../context/AuthContext";
import { SHOW_TOAST } from "../../../context/constants";
import request from "../../../request/request";
import {
    ADMIN,
    ALL_QUIZZ,
    ERR_MSG,
    QUIZ_ENDPOINT,
} from "../../../routes/routes";
import QuizOptionsCard from "../../user/all-quiz/QuizOptionsCard";

const AllQuizCard = ({
    quizID,
    maxMark,
    numberOfQuestions,
    title,
    active,
    description,
    category,
    quiz,
    onDelete,
    data,
}) => {
    const [activeQuiz, setActiveQuiz] = useState(active);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [delteLoading, setDeleteLoading] = useState(false);
    const { state, dispatch } = useAuthContext();

    const handleUpdate = () => {
        const body = {
            quizID,
            maxMark,
            numberOfQuestions,
            title,
            active: !activeQuiz,
            description,
            category,
        };
        setLoading(true);
        request
            .authPost({ endpoint: QUIZ_ENDPOINT, body })
            .then((res) => {
                setLoading(false);
                setActiveQuiz((prev) => !prev);
            })
            .catch((error) => {
                console.log(error);
                /* @TODO ==> Show error to somewhere like toast  Sun Jul 24  */
                setLoading(false);
            });
    };

    const deleteQuiz = async (quizId) => {
        setDeleteLoading(false);
        try {
            await request.authDelete({ endpoint: `${QUIZ_ENDPOINT}${quizId}` });
            dispatch({
                type: SHOW_TOAST,
                payload: { message: "Quiz deleted successfully!" },
            });
            setDeleteLoading(false);
            onDelete(quiz.filter((item) => item.quizID !== quizID));
        } catch (error) {
            setDeleteLoading(false);
            dispatch({
                type: SHOW_TOAST,
                payload: { message: ERR_MSG, error: true },
            });
        }
    };
    return (
        <QuizOptionsCard className="mb-3">
            {/* title */}
            <div className="flex justify-between border-b-2 border-primary mb-7 gap-3">
                <div className="flex items-center gap-3">
                    <div className="text-4xl text-orange-400 ">
                        <BsFillSunriseFill />
                    </div>

                    <Title
                        className="capitalize mb-0 text-lg md:text-xl lg:text-xl "
                        title={title}
                        subtitle={category.title}
                    />
                </div>

                <div>
                    {loading ? (
                        <Spinner size={6} />
                    ) : (
                        <Switch
                            label={activeQuiz ? "Published" : "Publish"}
                            value={activeQuiz}
                            checked={activeQuiz}
                            onChange={handleUpdate}
                            id={quizID}
                        />
                    )}
                </div>
            </div>
            <p className="text-gray-700 mb-4 text-gr">{description}</p>

            <div>
                <PrimaryBtn
                    title="View"
                    bg="bg-gray-500"
                    className="py-2 mr-2 mb-2"
                    onClick={() =>
                        navigate(`${ADMIN}/${ALL_QUIZZ}/${quizID}`, {
                            state: { title: category.title },
                        })
                    }
                    /* @TODO ==> passs the id here  Wed Jul 20  */
                />
                <QuizTag color="green" title={`Max Marks: ${maxMark}`} />
                <QuizTag
                    color="primary"
                    title={`Number of Questions: ${numberOfQuestions}`}
                />

                <PrimaryBtn
                    title="Delete"
                    bg="bg-error"
                    loading={delteLoading}
                    className="py-2 px-3 mr-2 mb-2"
                    onClick={() => deleteQuiz(quizID)}
                />
            </div>
        </QuizOptionsCard>
    );
};

export default AllQuizCard;

const QuizTag = ({ color = "gray-500", title }) => {
    return (
        <div
            className={` py-1 px-2 sm:py-2 sm:px-4 text-${color} border-2  mr-2 mb-2 w-fit rounded-md border-${color} inline-block`}
        >
            {title}
        </div>
    );
};
