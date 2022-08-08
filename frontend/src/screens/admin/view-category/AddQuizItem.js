import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import InputComponent from "../../../components/input/Input";
import { useAuthContext } from "../../../context/AuthContext";
import { SHOW_TOAST } from "../../../context/constants";
import request from "../../../request/request";
import { ERR_MSG, QUIZ_ENDPOINT, REQUIRED } from "../../../routes/routes";

const AddQuizItem = ({ category, setQuizData, quizData, onAdd }) => {
    const [quizError, setQuizError] = useState({});
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const [quiz, setQuiz] = useState({
        title: "",
        maxMark: "",
        description: "",
        numberOfQuestions: "",
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({ ...quiz, [name]: value });
    };

    const validate = () => {
        const erros = {};
        if (!quiz.title) erros.title = REQUIRED;
        if (!quiz.maxMark) erros.maxMark = REQUIRED;
        if (!quiz.description) erros.description = REQUIRED;
        if (!quiz.numberOfQuestions) erros.numberOfQuestions = REQUIRED;

        return erros;
    };
    const hanldeAddQuiz = async (e) => {
        const getFromData = validate();
        setQuizError(getFromData);

        if (Object.keys(getFromData).length === 0) {
            setLoading(true);
            try {
                const quizObj = {
                    title: quiz.title,
                    maxMark: quiz.maxMark,
                    description: quiz.description,
                    numberOfQuestions: quiz.numberOfQuestions,
                    category: category,
                };

                const res = await request.authPost({
                    endpoint: QUIZ_ENDPOINT,
                    body: quizObj,
                });

                setQuizData([...quizData, res]);
                setLoading(false);
                dispatch({
                    type: SHOW_TOAST,
                    payload: { message: "Quiz added successfully!" },
                });
                onAdd();
            } catch (error) {
                console.log(error, "errorQUiz");
                dispatch({
                    type: SHOW_TOAST,
                    payload: {
                        message: typeof error === "string" ? error : ERR_MSG,
                        error: true,
                    },
                });
                setLoading(false);
            }
        }
    };
    return (
        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputComponent
                label="Title"
                placeholder="Enter Quiz Title"
                className="w-full border-blue-400"
                name="title"
                error={quizError.title}
                value={quiz.title}
                onChange={handleChange}
            />
            <InputComponent
                label="Max Marks"
                placeholder="Enter Quiz Title"
                className="w-full border-blue-400"
                name="maxMark"
                type="number"
                error={quizError.maxMark}
                value={quiz.maxMark}
                onChange={handleChange}
            />
            <InputComponent
                label="Number of Questions"
                placeholder="Number of Questions"
                className="w-full border-blue-400"
                name="numberOfQuestions"
                type="number"
                error={quizError.numberOfQuestions}
                value={quiz.numberOfQuestions}
                onChange={handleChange}
            />
            <InputComponent
                label="Description"
                placeholder="Enter description"
                component="textarea"
                rows="1"
                className="w-full border-blue-400"
                name="description"
                error={quizError.description}
                value={quiz.description}
                onChange={handleChange}
            />
            <PrimaryBtn
                bg="bg-primary"
                title="Add Quiz"
                onClick={hanldeAddQuiz}
                loading={loading}
            />
        </div>
    );
};

export default AddQuizItem;
