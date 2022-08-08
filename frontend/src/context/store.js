const initialState = {
    user: sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : null,
    toast: null,
};

export default initialState;
