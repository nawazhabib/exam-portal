import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/images/signup.svg";
import Container from "../../components/container/Container";
import Message from "../../components/message/Message";
import Spinner from "../../components/spinner/Spinner";
import { useAuthContext } from "../../context/AuthContext";
import { SHOW_TOAST } from "../../context/constants";
import { BASE_URL, ERR_MSG, LOGIN } from "../../routes/routes";
const UserVerification = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const code = Object.fromEntries(new URLSearchParams(location.search))[
        "code"
    ];
    if (!code || code === undefined) navigate("*");
    const { dispatch } = useAuthContext();
    useEffect(() => {
        const checkVerification = async () => {
            setError(false);
            setLoading(true);
            setMessage("");
            try {
                if (code && code !== "") {
                    const res = await fetch(
                        `${BASE_URL}/user/verify?code=${code}`
                    );

                    const data = await res.text();
                    if (data === "verify_success") {
                        dispatch({
                            type: SHOW_TOAST,
                            payload: {
                                message:
                                    "Email verification success. Please login",
                            },
                        });
                        navigate(LOGIN);
                        setError(false);
                        setLoading(false);
                    } else {
                        setError(true);
                        setLoading(false);
                        throw "Email verification failed";
                    }
                }
            } catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
                setMessage(typeof err === "string" ? err : ERR_MSG);
            }
        };

        checkVerification();
    }, [code, dispatch, navigate]);

    return (
        <Container className="grid place-items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4  place-items-start lg:place-items-center">
                <div className="hidden lg:block  mb-9 lg:mb-0">
                    <img src={SignupImage} alt="signup_success" />
                </div>

                <div>
                    {loading ? (
                        <div className="flex justify-center">
                            <div className="max-w-min mt-xl w-full ">
                                <Spinner />
                            </div>
                        </div>
                    ) : (
                        <Message error={error}>{message}</Message>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default UserVerification;
