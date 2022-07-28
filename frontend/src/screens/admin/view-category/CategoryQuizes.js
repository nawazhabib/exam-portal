import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const CategoryQuizes = () => {
    let { catId } = useParams();
    const [delteLoading, setDeletLoading] = useState(false);
    const navigate = useNavigate();

    const { data, error, loading, message } = useNetwork(
        `${SINGLE_QUIZ_ENDPOINT}${catId}`,
        true
    );

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
                title={data !== null && data[0]?.category?.title}
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

export default CategoryQuizes;
