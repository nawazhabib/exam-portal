import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PrivateOutlet from "./routes/PrivateOutlet";
import {
    ADD_CATEGORY,
    ADD_QUIZ,
    ADMIN,
    ALL_QUIZZ,
    HOME,
    LOGIN,
    PROFILE,
    RUNNING,
    SIGNUP,
    USER,
    VIEW_CATEGORY,
} from "./routes/routes";
import AdminActivity from "./screens/admin/activity/AdminAcitivity";
import AddNewCategory from "./screens/admin/add/AddNewCategory";
import AddNewQuiz from "./screens/admin/add/AddNewQuiz";
import AdminDashboard from "./screens/admin/AdminDashboard";
import DisplayAllQuizes from "./screens/admin/all-quiz/DisplayQuizes";
import EditQuiz from "./screens/admin/all-quiz/EditQuiz";
import ViewCategories from "./screens/admin/view-category/ViewCategories";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
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

function App() {
    return (
        <div className="bg-gray-100">
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* Global Routes */}
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />

                    <Route element={<PrivateOutlet />}>
                        <Route path={PROFILE} element={<Profile />} />
                        {/* Role: User */}
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

                        {/* Role: Admin */}
                        <Route path={ADMIN} element={<AdminDashboard />}>
                            <Route index element={<AdminActivity />} />

                            <Route
                                path={ADD_CATEGORY}
                                element={<AddNewCategory />}
                            />
                            <Route
                                path={VIEW_CATEGORY}
                                element={<ViewCategories />}
                            />
                            <Route path={ADD_QUIZ} element={<AddNewQuiz />} />
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
