import Title from "../../components/text/Title";
import FinishedQuizCard from "./all-quiz/FinishedQuizCard";

const AttemptQuiz = () => {
    return (
        <div>
            <Title
                title="You have attempted the following quiz"
                className="border-b-2 border-blue-primary shadow-lg rounded-md px-4 pt-3 capitalize"
            />
            <FinishedQuizCard />
            <FinishedQuizCard />
            <FinishedQuizCard />
            {/* Map this card Quiz Card */}
            {/* <QuizCard /> */}
        </div>
    );
};

export default AttemptQuiz;
