import { BASE_URL, ERR_MSG } from "../routes/routes";
import auth from "./auth";
const TOKEN_ERR = "Invalid Token";
export const defaultHeader = {
    "Content-Type": "application/json",
    Accept: "*",
};

const request = (() => {
    const getPost = ({ endpoint, headers = {}, isFormData = false, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                const response = await fetch(`${BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: isFormData
                        ? headers
                        : { ...defaultHeader, ...headers },
                    body: isFormData ? body : JSON.stringify(body),
                });
                console.log(response, "response");
                console.log(body, "body");

                const data = await response.json();
                console.log("data, ", data);
                if (data?.error) reject(data.error);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getAuthPost = ({ endpoint, headers = {}, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                console.log("Endpoint", endpoint);
                const token = auth.getToken();
                if (token) {
                    const response = await fetch(`${BASE_URL}${endpoint}`, {
                        method: "POST",
                        body: JSON.stringify(body),
                        headers: {
                            ...defaultHeader,
                            Authorization: `Bearer ${token}`,
                            ...headers,
                        },
                    });
                    const data = await response.json();
                    if (data?.error) reject(data.error);
                    resolve(data);
                } else {
                    reject(TOKEN_ERR);
                }
            } catch (error) {
                reject(typeof error === "string" ? error : ERR_MSG);
            }
        });
    };
    const getAuthPut = ({ endpoint, headers = {}, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                console.log("Endpoint", endpoint);
                const token = auth.getToken();
                if (token) {
                    const response = await fetch(`${BASE_URL}${endpoint}`, {
                        method: "PUT",
                        body: JSON.stringify(body),
                        headers: {
                            ...defaultHeader,
                            Authorization: `Bearer ${token}`,
                            ...headers,
                        },
                    });
                    const data = await response.json();
                    if (data?.error) reject(data.error);
                    resolve(data);
                } else {
                    reject(TOKEN_ERR);
                }
            } catch (error) {
                reject(typeof error === "string" ? error : ERR_MSG);
            }
        });
    };

    const getAuthRequest = ({ endpoint, headers = {} }) => {
        return new Promise(async (resolve, reject) => {
            const token = auth.getToken();

            try {
                if (token) {
                    console.log("Sending Request", `${BASE_URL}${endpoint}`);
                    const response = await fetch(`${BASE_URL}${endpoint}`, {
                        method: "GET",

                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "*",
                            "Content-Type": "application/json",
                        },
                        // headers1: {
                        //     Authorization: ,
                        //     ...headers,
                        // },
                    });
                    const data = await response.json();
                    console.log(data, "data");
                    if (data.error)
                        reject(
                            typeof data.error === "string"
                                ? data.error
                                : ERR_MSG
                        );
                    resolve(data);
                } else {
                    reject(TOKEN_ERR);
                }
            } catch (error) {
                console.log("error:Reuest", error);
                reject(typeof error === "string" ? error : ERR_MSG);
            }
        });
    };

    const getAuthDelete = ({ endpoint, headers = {}, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                console.log("Endpoint", endpoint);
                const token = auth.getToken();
                if (token) {
                    await fetch(`${BASE_URL}${endpoint}`, {
                        method: "DELETE",
                        headers: {
                            ...defaultHeader,
                            Authorization: `Bearer ${token}`,
                            ...headers,
                        },
                    });
                    resolve(true);
                } else {
                    reject(TOKEN_ERR);
                }
            } catch (error) {
                reject(typeof error === "string" ? error : ERR_MSG);
            }
        });
    };

    return {
        post: getPost,
        authPost: getAuthPost,
        authGet: getAuthRequest,
        authPut: getAuthPut,
        authDelete: getAuthDelete,
    };
})();

export default request;
