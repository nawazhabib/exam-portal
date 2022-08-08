import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Toast from "./components/Toast/Toast";
import PrivateOutlet from "./routes/PrivateOutlet";
import PublicRoutes from "./routes/PublicRoutes";
import {
    ADD_CATEGORY,
    ADMIN,
    ADMIN_AUTHORITY,
    ALL_QUIZZ,
    ALL_USERS,
    FORGET_PASSWORD,
    HOME,
    LOGIN,
    PROFILE,
    RESET_PASSWORD,
    RUNNING,
    SIGNUP,
    USER,
    USER_ADMIN_AUTHORITY,
    VERIFICATION_EMAIL,
    VIEW_CATEGORY,
} from "./routes/routes";
import AdminActivity from "./screens/admin/activity/AdminAcitivity";
import AddNewCategory from "./screens/admin/add/AddNewCategory";
import AdminDashboard from "./screens/admin/AdminDashboard";
import DisplayAllQuizes from "./screens/admin/all-quiz/DisplayQuizes";
import EditQuiz from "./screens/admin/all-quiz/EditQuiz";
import ListAllUsers from "./screens/admin/users/ListAllUsers";
import CategoryQuizes from "./screens/admin/view-category/CategoryQuizes";
import ViewCategories from "./screens/admin/view-category/ViewCategories";
import Home from "./screens/home/Home";
import ForgetPassword from "./screens/login/ForgetPassword";
import Login from "./screens/login/Login";
import ResetPassword from "./screens/login/ResetPassword";
import NotFound from "./screens/not-found/NotFound";
import Profile from "./screens/profile/Profile";
import SignUp from "./screens/signup/SingnUp";
import AllQuiz from "./screens/user/all-quiz/AllQuiz";
import FinishedQuiz from "./screens/user/all-quiz/FinishedQuiz";
import OnGoingQuiz from "./screens/user/all-quiz/OnGoingQuiz";
import SingleQuiz from "./screens/user/all-quiz/SingleQuiz";
// import QuizCategories from "./screens/user/QuizCategories";
import UserActivity from "./screens/user/UserActivity";
import UserDashboard from "./screens/user/UserDashboard";
import UserVerification from "./screens/verfiy/UserVerification";

function App() {
    return (
        <div className="bg-gray-100">
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* Global Routes */}
                    <Route path={HOME} element={<Home />} />

                    <Route
                        element={
                            <PublicRoutes allowed={USER_ADMIN_AUTHORITY} />
                        }
                    >
                        <Route path={LOGIN} element={<Login />} />
                        <Route path={SIGNUP} element={<SignUp />} />
                    </Route>

                    {/* Role: User */}
                    <Route
                        element={
                            <PrivateOutlet allowed={USER_ADMIN_AUTHORITY} />
                        }
                    >
                        <Route path={PROFILE} element={<Profile />} />
                        <Route path={USER} element={<UserDashboard />}>
                            <Route index element={<UserActivity />} />
                            <Route path=":title" element={<AllQuiz />} />
                            <Route
                                path="category/:catId"
                                element={<SingleQuiz />}
                            />
                        </Route>
                        <Route path={RUNNING} element={<OnGoingQuiz />} />
                        <Route
                            path={`${RUNNING}/:id`}
                            element={<FinishedQuiz />}
                        />
                    </Route>

                    <Route
                        element={<PrivateOutlet allowed={ADMIN_AUTHORITY} />}
                    >
                        {/* Role: Admin */}
                        <Route path={ADMIN} element={<AdminDashboard />}>
                            <Route index element={<AdminActivity />} />

                            <Route
                                path={ADD_CATEGORY}
                                element={<AddNewCategory />}
                            />
                            <Route
                                path={ALL_USERS}
                                element={<ListAllUsers />}
                            />
                            <Route
                                path={VIEW_CATEGORY}
                                element={<ViewCategories />}
                            />
                            <Route
                                path={`${VIEW_CATEGORY}/:catId`}
                                element={<CategoryQuizes />}
                            />

                            <Route
                                path={ALL_QUIZZ}
                                element={<DisplayAllQuizes />}
                            />
                            <Route
                                path={`${ALL_QUIZZ}/:id`}
                                element={<EditQuiz />}
                            />
                        </Route>
                    </Route>
                    <Route
                        path={VERIFICATION_EMAIL}
                        element={<UserVerification />}
                    />
                    <Route
                        path={FORGET_PASSWORD}
                        element={<ForgetPassword />}
                    />

                    <Route path={RESET_PASSWORD} element={<ResetPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Toast />
            <Footer />
        </div>
    );
}

export default App;
