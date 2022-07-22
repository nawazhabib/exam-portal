import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import Title from "../../../components/text/Title";
import request from "../../../request/request";
import { ERR_MSG, QUIZ_ENDPOINT } from "../../../routes/routes";
import Cards from "../card/Cards";

const CARDS = [
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
];

const AllQuiz = () => {
    let { title } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        setLoading(true);
        setMessage("");
        request
            .authGet({ endpoint: QUIZ_ENDPOINT })
            .then((res) => {
                setLoading(false);
                setMessage("");
                setQuiz(res);
            })
            .catch((err) => {
                setLoading(false);
                setMessage("");
                setError(typeof err === "string" ? err : ERR_MSG);
            });
    }, []);
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
            {laoding ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {quiz.length === 0 ? (
                        <Message warning>No quiz available</Message>
                    ) : (
                        quiz.map((item, index) => (
                            <div key={item.categoryID} className="">
                                <Cards
                                    title={item.title}
                                    marks={item.marks}
                                    desc={item.description}
                                    questions={item.question}
                                    quizId={item.quizID}
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
