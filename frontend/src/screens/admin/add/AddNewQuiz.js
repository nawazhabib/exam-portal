import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import InputComponent from "../../../components/input/Input";
import Title from "../../../components/text/Title";
import { useAuthContext } from "../../../context/AuthContext";
import { SHOW_TOAST } from "../../../context/constants";
import request from "../../../request/request";
import { ERR_MSG, QUESTION_ENDPOINT, REQUIRED } from "../../../routes/routes";

const AddNewQuiz = ({ onUpdate, hideForm, quizID }) => {
    const [loading, setLoading] = useState(false);

    const [quiz, setQuiz] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        content: "",
    });
    const [quizError, setQuizError] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        content: "",
    });
    const { dispatch } = useAuthContext();
    const [answer, setAnswer] = useState("option1");
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({ ...quiz, [name]: value });
    };
    const handleReset = (e) => {
        e.preventDefault();
        const tempQuiz = {
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            content: "",
        };

        setQuiz(tempQuiz);
        setQuizError(tempQuiz);
    };

    const validate = () => {
        const erros = {};
        if (!quiz.option1) erros.option1 = REQUIRED;
        if (!quiz.option2) erros.option2 = REQUIRED;
        if (!quiz.option3) erros.option3 = REQUIRED;
        if (!quiz.option4) erros.option4 = REQUIRED;
        if (!quiz.content) erros.content = REQUIRED;

        return erros;
    };

    const hanldeAdd = async () => {
        const getFromData = validate();
        setQuizError(getFromData);
        if (Object.keys(getFromData).length === 0) {
            // setLoading(true);

            let body = quiz;
            body.quiz = quizID;
            body.answer = quiz[answer];

            try {
                await request.authPost({
                    endpoint: `${QUESTION_ENDPOINT}/`,
                    body: body,
                });

                const tempQuiz = {
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: "",
                    answer: "",
                    content: "",
                };
                dispatch({
                    type: SHOW_TOAST,
                    payload: { message: "Quiz added successfully!" },
                });
                setQuiz(tempQuiz);
                setQuizError(tempQuiz);
                onUpdate();
                hideForm();
            } catch (error) {
                dispatch({
                    type: SHOW_TOAST,
                    payload: {
                        message: typeof error === "string" ? error : ERR_MSG,
                    },
                });
                setLoading(false);
                const tempQuiz = {
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: "",
                    answer: "",
                    content: "",
                };

                setQuiz(tempQuiz);
                setQuizError(tempQuiz);
                onUpdate();
                hideForm();
            }
        }
    };

    return (
        <form>
            <Title
                title="Add new Question"
                className="pl-2 py-3 border-b-2 border-primary shadow-md mb-3 rounded-md"
            />
            <div className="mb-2 bg-white p-4 rounded-md shadow-md ">
                <InputComponent
                    label="Question"
                    placeholder="Enter Quiz Question"
                    component="textarea"
                    rows="2"
                    className="w-full border-blue-400"
                    name="content"
                    error={quizError.content}
                    value={quiz.content}
                    onChange={handleChange}
                />
                {/* Quiz Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <InputComponent
                            label="Option 1"
                            placeholder="Option 1"
                            className="w-full "
                            value={quiz.option1}
                            onChange={handleChange}
                            name="option1"
                            error={quizError.option1}
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 2"
                            placeholder="Option 2"
                            className="w-full "
                            value={quiz.option2}
                            onChange={handleChange}
                            name="option2"
                            error={quizError.option2}
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 3"
                            placeholder="Option 3"
                            className="w-full "
                            value={quiz.option3}
                            onChange={handleChange}
                            name="option3"
                            error={quizError.option3}
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 4"
                            placeholder="Option 4"
                            className="w-full "
                            value={quiz.option4}
                            onChange={handleChange}
                            name="option4"
                            error={quizError.option4}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Choose Answer</label>
                        <select
                            className={`w-full bg-gray-200  border-2 p-2  rounded bg-opacity-50 focus:bg-opacity-100   focus:bg-gray-50   border-gray-300   focus:outline-none `}
                            name="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        >
                            <option value="option1">{quiz.option1}</option>
                            <option value="option2">{quiz.option2}</option>
                            <option value="option3">{quiz.option3}</option>
                            <option value="option4">{quiz.option4}</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <PrimaryBtn
                            loading={loading}
                            title="Add Question"
                            onClick={hanldeAdd}
                        />
                        <PrimaryBtn
                            title="Reset"
                            bg="bg-red-500 ml-4"
                            onClick={handleReset}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddNewQuiz;
