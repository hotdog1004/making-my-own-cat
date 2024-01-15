import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Result from 'pages/Result';
import Home from 'pages/Home';
import QuizPage from 'pages/QuizPage';
import ErrorPage from 'pages/ErrorPage';
import RouteChangeTracker from 'RouteChangeTracker';

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
      <Route path="/quiz" element={<QuizPage />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;
