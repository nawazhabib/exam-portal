import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import congrats from "../../../assets/images/congrats1.png";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import Container from "../../../components/container/Container";
import Title from "../../../components/text/Title";
import { USER } from "../../../routes/routes";

const FinishedQuiz = () => {
    let navigate = useNavigate();
    const { state } = useLocation();

    return (
        <Container className="max-w-screen-lg flex justify-center bg-white my-4 ">
            <div className="shadow-xl border-2 border-gray-200  text-center p-2 rounded-lg">
                <Title
                    title={state.title}
                    className="capitalize text-center "
                    subtitle={state.category}
                />
                <div className="flex justify-center">
                    <div>
                        <img
                            src={congrats}
                            alt="congrats"
                            className=" h-28 sm:h-44"
                        />

                        <div className="flex items-center justify-center py-4">
                            <div className="h-36 w-36 border-4  rounded-full border-primary text-green text-4xl flex items-center justify-center font-bold shadow-lg">
                                {parseFloat(state.marksGot).toFixed(1)}
                            </div>
                        </div>
                        <div className="flex items-center flex-col ">
                            <NumberShit
                                name="Total Qustion"
                                marks={state.totalQuiz}
                            />
                            <NumberShit
                                name="Attempeted"
                                marks={state.attemptd}
                            />
                            <NumberShit
                                name="Obtained"
                                marks={state.marksGot}
                            />
                            <NumberShit
                                name="Correct Answer"
                                marks={state.coorectAnswer}
                            />
                            <PrimaryBtn
                                onClick={() => navigate(USER)}
                                title="Home"
                                className="mt-4 px-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FinishedQuiz;

const NumberShit = ({ name, marks }) => {
    return (
        <div className="mr-2 text-xl text-left">
            <span className="text-left">{name} :</span>{" "}
            <span className="font-bold ml-2">{marks}</span>{" "}
        </div>
    );
};
