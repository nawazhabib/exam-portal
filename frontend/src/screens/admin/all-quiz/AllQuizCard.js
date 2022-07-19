import React, { useState } from "react";
import { BsFillSunriseFill } from "react-icons/bs";
import Switch from "../../../components/switch/Switch";
import Title from "../../../components/text/Title";
import QuizOptionsCard from "../../user/all-quiz/QuizOptionsCard";

const AllQuizCard = () => {
    const [activeQuiz, setActiveQuiz] = useState(false);
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
                        title="Quiz Title"
                        subtitle="General Knowledge"
                    />
                </div>

                <div>
                    <Switch
                        label="Publish"
                        value={activeQuiz}
                        checked={activeQuiz}
                        onChange={() => setActiveQuiz((prev) => !prev)}
                        id
                    />
                </div>
            </div>
            <p className="text-gray-700 mb-4 text-gr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                iure hic nulla quod ad error maxime, veritatis laborum incidunt
                tempora!
            </p>

            <div>
                <QuizTag color="green" title="Max Marks 50" />
                <QuizTag color="primary" title="Number of Question 10" />
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
