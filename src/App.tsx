import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import LeaderBoard from "./Pages/LeaderBoard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
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
