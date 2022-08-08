import React, { useEffect, useState } from "react";
import Message from "../../../components/message/Message";
import Toast from "../../../components/Toast/Toast";
import request from "../../../request/request";
import { ERR_MSG, REGESTRATION_ENDPOINT } from "../../../routes/routes";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ListAllUsers = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [deletErr, setDeleteErr] = useState(false);
    const getAllUsers = async () => {
        try {
            const res = await request.authGet({
                endpoint: REGESTRATION_ENDPOINT,
            });
            console.log("res", res);
            setUsers(res);
            console.log(res);
        } catch (err) {
            setError(typeof err === "string" ? err : ERR_MSG);
            setUsers(null);
        }
    };
    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <div>
            <h1 className="text-center text-2xl text-primary uppercase font-bold mb-4">
                All Users
            </h1>
            <TableHeader />
            {users !== null && users.length > 0 ? (
                users.map((item) => (
                    <TableRow
                        key={item.id}
                        user={item}
                        onDelete={getAllUsers}
                        setError={setDeleteErr}
                        setMessage={setMessage}
                    />
                ))
            ) : error ? (
                <Message error> {error}</Message>
            ) : null}

            {message && <Toast message={message} error={error} />}
        </div>
    );
};

export default ListAllUsers;
