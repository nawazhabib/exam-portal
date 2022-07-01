import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HOME, LOGIN, SIGNUP, USER } from "./routes";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SingnUp";
import UserDashboard from "./screens/user/UserDashboard";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                    <Route path={USER} element={<UserDashboard />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
