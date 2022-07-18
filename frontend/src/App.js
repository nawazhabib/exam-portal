import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HOME, LOGIN, RUNNING, SIGNUP, USER } from "./routes";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import NotFound from "./screens/not-found/NotFound";
import SignUp from "./screens/signup/SingnUp";
import AllQuiz from "./screens/user/all-quiz/AllQuiz";
import OnGoingQuiz from "./screens/user/all-quiz/OnGoingQuiz";
import AttemptQuiz from "./screens/user/AttemptQuiz";
// import QuizCategories from "./screens/user/QuizCategories";
import UserActivity from "./screens/user/UserActivity";
import UserDashboard from "./screens/user/UserDashboard";

function App() {
    return (
        <div className="bg-gray-100">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                    <Route path={USER} element={<UserDashboard />}>
                        <Route index element={<UserActivity />} />

                        <Route path=":title" element={<AllQuiz />} />
                        <Route path="attempt" element={<AttemptQuiz />} />
                    </Route>
                    <Route path={RUNNING} element={<OnGoingQuiz />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
