import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import { useAuthContext } from "../../../context/AuthContext";
import { SHOW_TOAST } from "../../../context/constants";
import request from "../../../request/request";
import { ERR_MSG, QUESTION_ENDPOINT } from "../../../routes/routes";

const EditQuizCard = ({ data, onUpdate, number }) => {
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const handleDelete = async (e) => {
        try {
            setLoading(true);
            await request.authDelete({
                endpoint: `${QUESTION_ENDPOINT}/${data.questionID}`,
            });
            setLoading(false);
            dispatch({
                type: SHOW_TOAST,
                payload: { message: "Deleted successfully!" },
            });
            onUpdate();
        } catch (error) {
            setLoading(false);
            dispatch({
                type: SHOW_TOAST,
                payload: {
                    message: typeof error === "string" ? error : ERR_MSG,
                },
            });
            /* @TODO ==> Show Error in someplace  Sun Jul 24  */
        }
    };

    return (
        <div className="bg-white p-3 shadow-md rounded-md mb-4">
            <p className="text-lg mb-4 text-gray-800 ">
                Q.{number + 1}
                {")"} {data?.content}
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 border-b border-gray-400 pb-2">
                <p className="text-gray-700">
                    1{")"} {data?.option1}{" "}
                </p>
                <p className="text-gray-700">
                    2{")"} {data?.option2}{" "}
                </p>
                <p className="text-gray-700">
                    3{")"} {data?.option3}{" "}
                </p>
                <p className="text-gray-700">
                    4{")"} {data?.option4}{" "}
                </p>
            </div>
            <p className="text-green-400 mt-3 mb-3 ">
                Correct Answer: {data?.answer}
            </p>

            <PrimaryBtn
                title="Delete"
                onClick={handleDelete}
                bg="bg-red-700"
                className="mt-3"
                loading={loading}
            />
        </div>
    );
};

export default EditQuizCard;
