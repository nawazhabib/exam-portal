import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import InputComponent from "../../../components/input/Input";
import Title from "../../../components/text/Title";

const AddNewQuiz = () => {
    const [quiz, setQuiz] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
    });
    const handleChange = () => {};
    const handleReset = (e) => {
        e.preventDefault();
        const tempQuiz = {
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: "",
        };
        setQuiz({ ...quiz, tempQuiz });
    };
    const hanldeAdd = () => {};

    return (
        <form>
            <Title
                title="Add new Quiz"
                className="pl-2 py-3 border-b-2 border-primary shadow-md mb-3 rounded-md"
            />
            <div className="mb-2 bg-white p-4 rounded-md shadow-md ">
                <InputComponent
                    label="Question"
                    placeholder="Enter Quiz Question"
                    component="textarea"
                    rows="2"
                    className="w-full border-blue-400"
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
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 2"
                            placeholder="Option 2"
                            className="w-full "
                            value={quiz.option2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 3"
                            placeholder="Option 3"
                            className="w-full "
                            value={quiz.option3}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <InputComponent
                            label="Option 4"
                            placeholder="Option 4"
                            className="w-full "
                            value={quiz.option4}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <InputComponent
                            label="Answer"
                            placeholder="Quiz Answer"
                            className="w-full  bg-green-50 "
                            value={quiz.answer}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <PrimaryBtn title="Add Question" onClick={hanldeAdd} />
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
