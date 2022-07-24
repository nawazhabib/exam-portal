import { useEffect, useState } from "react";
import request from "../request/request";
import { ERR_MSG } from "../routes/routes";

const useNetwork = (endpoint, get = true, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const requestService = get ? request.authGet : request.authPost;
    useEffect(() => {
        setLoading(true);
        setMessage("");
        requestService({ endpoint: endpoint, body })
            .then((res) => {
                setLoading(false);
                setMessage("");
                setData(res);
                setError(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                setMessage(typeof err === "string" ? err : ERR_MSG);
            });
    }, [body, endpoint, requestService]);
    return { loading, error, data, message };
};

export default useNetwork;
