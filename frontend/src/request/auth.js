import { REMOVE_USER } from "../context/constants";
import { BASE_URL, ERR_MSG, HOME } from "../routes/routes";
import { defaultHeader } from "./request";

const auth = (() => {
    const setToken = (token) => {
        return sessionStorage.setItem("exampPortalUser", JSON.stringify(token));
    };
    const getToken = () => {
        return sessionStorage.getItem("exampPortalUser")
            ? JSON.parse(sessionStorage.getItem("exampPortalUser"))
            : null;
    };
    const removeToken = () => {
        return sessionStorage.removeItem("exampPortalUser");
    };

    const login = ({ endpoint, body, headers }) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Sending Request", `${BASE_URL}${endpoint}`);
                const response = await fetch(`${BASE_URL}${endpoint}`, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: { ...defaultHeader, ...headers },
                });
                const data = await response.json();

                if (data.error) reject(data.error);
                else if (!data.token) reject(ERR_MSG);
                else {
                    setToken(data.token);
                    resolve(true);
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const logut = (dispatch, navigate) => {
        removeToken();
        dispatch({ type: REMOVE_USER });
        navigate(HOME);
    };

    return {
        login,
        getToken,
        logut,
    };
})();
export default auth;
