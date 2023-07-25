import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Result from "pages/Result";
import Home from "pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/result" element={<Result />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;