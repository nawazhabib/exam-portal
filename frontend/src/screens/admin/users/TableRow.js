import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import request from "../../../request/request";
import { ERR_MSG, REGESTRATION_ENDPOINT } from "../../../routes/routes";

const TableRow = (props) => {
    const [loading, setLoading] = useState(false);
    const hanldeDelete = async (id) => {
        console.log("Delteing", id);
        setLoading(true);
        props.setError(false);
        props.setMessage("");
        try {
            await request.authDelete({
                endpoint: `${REGESTRATION_ENDPOINT}${props?.user?.id}`,
            });
            setLoading(false);
            props.setError(false);
            props.setMessage("User has been deleted successfully!");
            props.onDelete();
        } catch (error) {
            setLoading(false);
            console.log(error);
            props.setMessage(ERR_MSG);
            props.setError(true);
        }
    };
    return (
        <div className="grid grid-cols-3   lg:grid-cols-6">
            <div className="border border-white bg-gray-200 text-gray-700 py-3 text-center overflow-auto">
                <p>{props.user?.username}</p>
            </div>
            <div className=" hidden lg:block border border-white bg-gray-200 text-gray-700 py-3 text-center overflow-auto">
                <p>{`${props.user?.firstName} ${props.user?.lastName}`}</p>
            </div>
            <div className="border border-white bg-gray-200 text-gray-700 py-3 text-center  overflow-auto">
                <p>{props.user?.email}</p>
            </div>
            <div
                className={`border hidden lg:block border-white bg-opacity-70 ${
                    props.user?.authorities[0]?.authority === "ADMIN"
                        ? " bg-primary  text-white "
                        : " bg-blue-400  text-gray-700 "
                } py-3 text-center overflow-auto`}
            >
                <p>{props.user?.authorities[0]?.authority}</p>
            </div>
            <div
                className={` hidden lg:block border  border-white bg-opacity-30 font-bold   py-3 text-center overflow-auto ${
                    props.user?.enabled
                        ? " bg-green-50  text-green-700"
                        : " bg-error  text-error"
                } `}
            >
                <p>{`${props.user?.enabled ? "ACTIVE" : "DISABLED"}`}</p>
            </div>

            <div className="border border-white bg-gray-200 text-gray-700 py-3 text-center overflow-auto">
                <PrimaryBtn
                    bg="bg-error"
                    className="p-0"
                    loading={loading}
                    component={FaTrashAlt}
                    onClick={() => hanldeDelete(props?.user?.id)}
                />
            </div>
        </div>
    );
};

export default TableRow;
