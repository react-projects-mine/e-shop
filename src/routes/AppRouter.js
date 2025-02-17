import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
const AppRouter = () => {
    return (
        <Router> 
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
            </Routes> 
            {/* <Footer /> */}
        </Router>
    );
};

export default AppRouter;