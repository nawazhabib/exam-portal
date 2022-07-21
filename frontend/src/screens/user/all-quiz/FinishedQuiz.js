import React from "react";
import { useNavigate } from "react-router-dom";
import congrats from "../../../assets/images/congrats1.png";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import Container from "../../../components/container/Container";
import Title from "../../../components/text/Title";
import { USER } from "../../../routes/routes";

const FinishedQuiz = () => {
    let navigate = useNavigate();
    return (
        <Container className="max-w-screen-lg flex justify-center bg-white my-4 ">
            <div className="shadow-xl border-2 border-gray-200  text-center p-2 rounded-lg">
                <Title
                    title="Java Basic Examp"
                    className="capitalize text-center "
                    subtitle="Programming Category"
                />
                <div className="flex justify-center">
                    <div>
                        <img
                            src={congrats}
                            alt="congrats"
                            className=" h-28 sm:h-44"
                        />

                        <div className="flex items-center justify-center py-4">
                            <div className="h-36 w-36 border-4  rounded-full border-primary text-green text-7xl flex items-center justify-center font-bold shadow-lg">
                                {" "}
                                48
                            </div>
                        </div>
                        <div className="flex items-center flex-col ">
                            <NumberShit name="Total Qustion" marks={6} />
                            <NumberShit name="Attempeted" marks={6} />
                            <NumberShit name="Obtained" marks={6} />
                            <NumberShit name="Correct Answer" marks={6} />
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
