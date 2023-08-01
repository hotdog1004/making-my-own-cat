import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Result from "pages/Result";
import Home from "pages/Home";

const App = () => {
    return (
        <div className="flex relative z-[1] overflow-scroll mx-auto my-0 max-w-sm min-h-[667px] h-full">
            <div className="sm:max-w-xl w-full">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/result" element={<Result />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter> 
            </div>
        </div>
    )
}

export default App;