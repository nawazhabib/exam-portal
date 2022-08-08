// Base API URL
export const BASE_URL = "http://localhost:8080";
export const ERR_MSG = "There is something went wrong!";
export const SUCCESS_MSG = "Success!";
export const REQUIRED = "This field is required!";
// path All
export const HOME = "/";
export const LOGIN = "/login";
export const SIGNUP = "/signup";
export const PROFILE = "/profile";
export const FORGET_PASSWORD = "/forget";
export const RESET_PASSWORD = "/reset_password";

// path User
export const USER = "/user";
export const RUNNING = "/running";
export const FINISHED = "/finished";

//USER LABEL
export const HOME_LABEL = "Home";
export const LOGIN_LABEL = "Login";
export const SIGNUP_LABEL = "Singup";
export const USER_LABEL = "User";

// path Admin
export const ADMIN = "/dashboard";
export const ADD_CATEGORY = "add-category";
export const VIEW_CATEGORY = "view-category";
export const ALL_QUIZZ = "all-quizz";
export const ADD_QUIZ = "add-quiz";
export const ALL_USERS = "all-users";
export const VERIFICATION_EMAIL = "/user/verify";

// API END POINT
export const REGESTRATION_ENDPOINT = "/user/";
export const TOKEN_ENDPOINT = "/generate-token";
export const QUIZ_ENDPOINT = "/quiz/";
export const CATEGORY_ENDPOINT = "/category/";
export const SINGLE_QUIZ_ENDPOINT = "/quiz/category/";
export const QUESTION_ENDPOINT = "/question";
export const EVAL_QUIZ = `${QUESTION_ENDPOINT}/eval-quiz`;
export const VERIFY_EMAIL = "/user/verify";
export const FORGET_PASSWORD_ENDPOINT = "/forgot-password";

// Authority
export const USER_ADMIN_AUTHORITY = ["ADMIN", "NORMAL"];
export const ADMIN_AUTHORITY = ["ADMIN"];
// ADMIN  = [ADMIN, NORMAL], USER = [NORMAL]
