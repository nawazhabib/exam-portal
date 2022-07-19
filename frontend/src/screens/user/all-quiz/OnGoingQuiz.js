import React from "react";
import Container from "../../../components/container/Container";
import QuizCard from "./QuizCard";
import QuizHeader from "./QuizHeader";
import TimeIndicator from "./TimeIndicator";

const OnGoingQuiz = () => {
    return (
        <Container>
            <div className="grid   grid-cols-12 gap-4 ">
                <div className=" col-start-1 col-span-full md:col-end-10 ">
                    {/* Quiz Header  */}
                    <QuizHeader />
                    {/* Map this card Quiz Card */}
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                </div>
                <div className=" row-span-full  md:col-start-10  col-span-full   md:col-span-full ">
                    <TimeIndicator />
                </div>
            </div>
        </Container>
    );
};

export default OnGoingQuiz;
