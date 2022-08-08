import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { HIDE_TOAST } from "../../context/constants";

const Toast = () => {
    const { state, dispatch } = useAuthContext();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: HIDE_TOAST });
        }, 5000);
        return () => clearTimeout(timer);
    }, [dispatch, state]);

    return (
        <div>
            {state?.toast?.error ? (
                <div
                    id="toast-danger"
                    className={`flex items-center border-2 border-error p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed ${
                        state?.toast !== null ? "left-1/2" : " -left-full "
                    }  transition-all`}
                    role="alert"
                >
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        {state?.toast?.message}
                    </div>
                </div>
            ) : (
                <div
                    id="toast-success"
                    className={`flex fixed  border-green-50 border-2   bottom-6 items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all  ${
                        state?.toast !== null ? "left-1/2" : " -left-full "
                    } `}
                    role="alert"
                >
                    <div className="inline-flex flex-shrink-0  justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        {state?.toast?.message}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Toast;
