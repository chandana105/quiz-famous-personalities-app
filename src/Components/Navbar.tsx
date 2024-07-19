import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import quizLogo from "../assets/quizLogo.svg";
import { useQuizprovider } from "../Contexts/QuizProvider";

const Navbar = () => {
  const { dispatch } = useQuizprovider();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/") {
      dispatch({ type: "RESET" });
    }
  }, [path, dispatch]);

  return (
    <nav className="sticky top-0 z-30 bg-primary h-14 p-3.5 px-12 font-mono font-bold text-xl order-3  ">
      <ul className="flex justify-between">
        <Link to="/">
          <li className="flex" onClick={() => dispatch({ type: "RESET" })}>
            <img src={quizLogo} className="max-h-7" alt="quiz logo" />
            <span>Quizzy</span>
          </li>
        </Link>
        <Link to="/leaderboard">
          <li>LeaderBoard</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
