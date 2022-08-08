const phoneRegEx = /^\d{11}$/;
const emailRegEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegEX = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export { phoneRegEx, emailRegEx, passRegEX };
