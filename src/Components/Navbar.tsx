import React from "react";
import { Link } from "react-router-dom";
import quizLogo from "../assets/quizLogo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary h-14 p-3.5 px-12 font-mono font-bold text-xl  ">
      <ul className="flex justify-between">
        <Link to="/">
          <li className="flex">
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
