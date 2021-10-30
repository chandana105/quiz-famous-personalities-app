import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Quiz from "./Pages/QuizPage";
import LeaderBoard from "./Pages/LeaderBoard";
import Result from "./Pages/Result";
import { ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* {/* quiz description } */}
      <ToastContainer />
    </>
  );
}

export default App;
