import HomeImage from "../assets/images/education.svg";
import LoginImage from "../assets/images/login.svg";
import SignupImage from "../assets/images/signup.svg";
import { LOGIN_LABEL, SIGNUP, SIGNUP_LABEL, USER } from "../routes";

export const homeData = {
    img: HomeImage,
    title: "Welcome to exam portal",
    desc: "Exams Portal is a software solution enabling medical institutions to easily and safely publish and distribute medical imaging exams and related diagnostic reports to the cloud, for an online access and review by patients, referring physicians or other authorized users.",
    link: SIGNUP,
    btn: "Signup Now",
};

export const signupData = {
    img: SignupImage,
    title: "Welcome to exam portal!",
    desc: "Create Your Own accout to save your daily progress",
    link: USER,
    btn: SIGNUP_LABEL,
};

export const loginData = {
    img: LoginImage,
    title: "Welcome Back!",
    desc: "Login and attempt quizes",
    link: USER,
    btn: LOGIN_LABEL,
};
