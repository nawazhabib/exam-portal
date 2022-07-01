import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { HOME, LOGIN, SIGNUP } from "./routes";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SingnUp";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
