import { BASE_URL, ERR_MSG } from "../routes/routes";
import auth from "./auth";
const TOKEN_ERR = "Invalid Token";
export const defaultHeader = {
    "Content-Type": "application/json",
    Accept: "*",
};

const request = (() => {
    const getPost = ({ endpoint, headers = {}, body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                const response = await fetch(`${BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: { ...defaultHeader, ...headers },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
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
                const token = auth.getToken();
                if (token) {
                    const response = await fetch(`${BASE_URL}${endpoint}`, {
                        method: "POST",
                        body: JSON.stringify(body),
                        headers: {
                            Authorization: `Bearer ${token}`,
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

    return {
        post: getPost,
        authPost: getAuthPost,
        authGet: getAuthRequest,
    };
})();

export default request;
