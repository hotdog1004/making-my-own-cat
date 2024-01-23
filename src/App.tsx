import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Result from 'pages/ResultPage';
import Home from 'pages/Home';
import Quiz from 'pages/QuizPage';
import Error from 'pages/ErrorPage';
import RouteChangeTracker from 'RouteChangeTracker';
import AllResult from 'pages/AllResultPage';

const App = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO);
    }
  }, [window.Kakao]);
  RouteChangeTracker();

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/result" element={<Result />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/all" element={<AllResult />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
};

export default App;
