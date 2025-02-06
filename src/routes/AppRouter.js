import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;