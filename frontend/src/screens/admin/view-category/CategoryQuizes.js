import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import Title from "../../../components/text/Title";
import useNetwork from "../../../hooks/useNetwork";
import request from "../../../request/request";
import {
    ADMIN,
    CATEGORY_ENDPOINT,
    SINGLE_QUIZ_ENDPOINT,
    VIEW_CATEGORY,
} from "../../../routes/routes";
import Cards from "../../user/card/Cards";
import AddQuizItem from "./AddQuizItem";

const CategoryQuizes = () => {
    let { catId } = useParams();
    const { state } = useLocation();

    const [delteLoading, setDeletLoading] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    const navigate = useNavigate();

    const { data, error, loading, message } = useNetwork(
        `${SINGLE_QUIZ_ENDPOINT}${catId}`,
        true
    );
    const [quizData, setQuizData] = useState(data !== null ? data : []);

    useEffect(() => {
        if (data !== null && data.length > 0) setQuizData(data);
    }, [data]);

    const hanldldeDelete = () => {
        setDeletLoading(true);
        request
            .authDelete({ endpoint: `${CATEGORY_ENDPOINT}${catId}` })
            .then(() => {
                setDeletLoading(false);
                navigate(`${ADMIN}/${VIEW_CATEGORY}`);
            })
            .catch((err) => {
                console.log(err);
                setDeletLoading(false);
            });
    };

    return (
        <div>
            {/* title */}
            <Title
                title={state?.title}
                className="border-b-2 border-pruple shadow-md py-2  border-primary"
            >
                Category:{" "}
            </Title>
            <div className="py-4 bg-white rounded-md my-4 shadow-lg px-4">
                <PrimaryBtn
                    loading={delteLoading}
                    onClick={hanldldeDelete}
                    title="Delete Category"
                    bg="bg-red-500"
                />
            </div>
            <div className="py-4 bg-white rounded-md my-4 shadow-lg px-4 ">
                {isAdd ? (
                    <AddQuizItem
                        category={state}
                        setQuizData={setQuizData}
                        quizData={quizData}
                        onAdd={() => setIsAdd(false)}
                    />
                ) : (
                    <div className="flex items-center justify-center">
                        <div
                            onClick={() => setIsAdd(true)}
                            role="button"
                            className="disabled:bg-gray-100 bg-opacity-80 hover:bg-opacity-100 disabled:text-gray-500 hover:cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-400 px-4 py-2   text-white uppercase  font-bold bg-red-500 text-2xl sm:text-4xl
                rounded-full h-12 w-12 sm:h-20 sm:w-20 flex items-center justify-center"
                        >
                            <FaPlus />
                        </div>
                    </div>
                )}
            </div>

            {/* Cards */}
            {loading ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {quizData === null || quizData?.length === 0 ? (
                        <Message warning>No quiz available</Message>
                    ) : (
                        quizData.map((item) => (
                            <div key={item.categoryID} className="">
                                <Cards
                                    title={item.title}
                                    marks={item.maxMark}
                                    desc={item.description}
                                    questions={item.numberOfQuestions}
                                    quizID={item.quizID}
                                    quiz={quizData}
                                    onDelete={setQuizData}
                                />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryQuizes;
