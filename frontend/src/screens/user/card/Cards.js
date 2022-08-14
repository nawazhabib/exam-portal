import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import { useAuthContext } from "../../../context/AuthContext";
import { SHOW_TOAST } from "../../../context/constants";
import request from "../../../request/request";
import {
    ADMIN,
    ERR_MSG,
    QUIZ_ENDPOINT,
    RUNNING,
    VIEW_CATEGORY,
} from "../../../routes/routes";

const Cards = ({
    title,
    marks,
    desc,
    questions,
    quizID,

    onDelete,
    quiz,
}) => {
    const navigation = useNavigate();
    const { pathname } = useLocation();
    const [isAdmin] = useState(pathname.includes(`${ADMIN}/${VIEW_CATEGORY}`));

    const { dispatch } = useAuthContext();

    const [delteLoading, setDeleteLoading] = useState(false);

    const deleteQuiz = async (quizID) => {
        setDeleteLoading(false);
        try {
            await request.authDelete({ endpoint: `${QUIZ_ENDPOINT}${quizID}` });
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
        <div className="bg-white border  border-gray-200 shadow-lg p-3 rounded-md h-full ">
            <h1 className="text-gray-700 text-xl capitalize font-semibold mb-4 ">
                {title}
            </h1>
            <p className="font-light text-gray-500 mb-2 line-clamp-2 ">
                {desc}
            </p>

            <div className="flex gap-4 mb-4">
                <p className="text-gray-700">
                    <span className="font-bold text-primary">{questions}</span>{" "}
                    Questions{" "}
                </p>
                <p className="text-gray-700">
                    Max Marks{" "}
                    <span className="font-bold text-green">{marks}</span>
                </p>
            </div>
            {isAdmin ? (
                <PrimaryBtn
                    // onClick={() => navigation(RUNNING, { state: { quizID } })}
                    onClick={() => deleteQuiz(quizID)}
                    title="Delete"
                    bg="bg-error"
                    className=" font-bold text-sm"
                    loading={delteLoading}
                />
            ) : (
                <PrimaryBtn
                    onClick={() => navigation(RUNNING, { state: { quizID } })}
                    title="Start"
                    className=" font-bold text-sm"
                />
            )}
        </div>
    );
};

export default Cards;
