import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Quiz from "./Pages/QuizPage";
import LeaderBoard from "./Pages/LeaderBoard";
import Result from "./Pages/Result";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
      {/* 404 */}
    </>
  );
}

export default App;
// home:-
{
  /* <h1>Pick a Quiz</h1> */
}

// react icons primarycolor comon thigns config fiel mein
// container
// ke andar navbar
// body mein teen cards
// modal opening - description of quiz, and name enter
