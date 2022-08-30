import { useParams } from "react-router-dom";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import Title from "../../../components/text/Title";
import useNetwork from "../../../hooks/useNetwork";
import { QUIZ_ENDPOINT } from "../../../routes/routes";
import Cards from "../card/Cards";

const AllQuiz = () => {
    let { title } = useParams();

    const { data, error, loading, message } = useNetwork(
        `${QUIZ_ENDPOINT}activequizes`,
        true
    );
    return (
        <div>
            {/* title */}
            <Title
                title={title}
                className="border-b-2 border-pruple shadow-md py-2  border-primary"
            >
                Category:{" "}
            </Title>

            {/* Cards */}
            {loading ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {data === null || data?.length === 0 ? (
                        <Message warning>No quiz available</Message>
                    ) : (
                        data.map((item) => (
                            <div key={item.categoryID} className="">
                                <Cards
                                    title={item.title}
                                    marks={item.maxMark}
                                    desc={item.description}
                                    questions={item.numberOfQuestions}
                                    quizID={item.quizID}
                                />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default AllQuiz;
