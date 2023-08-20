import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Result from 'pages/Result';
import Home from 'pages/Home';
import Quiz from 'pages/Quiz';

const App = () => {
  return (
    <div className="flex relative z-[1] overflow-scroll mx-auto my-0 max-w-sm min-h-[667px] h-full bg-white">
      <div className="sm:max-w-xl w-full ">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
