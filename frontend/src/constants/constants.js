import {
    default as HomeImage,
    default as SignupImage,
} from "../assets/images/education.svg";
import { SIGNUP, SIGNUP_LABEL, USER } from "../routes";

export const homeData = {
    img: HomeImage,
    title: "Welcome to exam portal",
    desc: "Exams Portal is a software solution enabling medical institutions to easily and safely publish and distribute medical imaging exams and related diagnostic reports to the cloud, for an online access and review by patients, referring physicians or other authorized users.",
    link: SIGNUP,
    btn: "Signup Now",
};

export const signupData = {
    img: SignupImage,
    title: "Welcome to exam portal",
    desc: "Create Your Own accout to save your daily progress",
    link: USER,
    btn: SIGNUP_LABEL,
};
