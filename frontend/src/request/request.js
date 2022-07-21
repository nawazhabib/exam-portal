import { BASE_URL } from "../routes/routes";

const request = (() => {
    const getAuthPost = ({
        endpoint,
        headers = {},
        body,
        isFormData = false,
    }) => {
        return new Promise(async (resolve, reject) => {
            const defaultHeader = {
                "Content-Type": "application/json",
                Accept: "*",
            };

            try {
                const response = await fetch(`${BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: isFormData
                        ? headers
                        : { ...defaultHeader, ...headers },
                    body: isFormData ? body : JSON.stringify(body),
                    credentials: "same-origin",
                });
                const data = await response.json();
                if (data?.error) reject(data.error);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        authPost: getAuthPost,
    };
})();

export default request;
