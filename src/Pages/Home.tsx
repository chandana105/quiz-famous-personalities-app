import React from "react";
import { Link } from "react-router-dom";
import srinivasaramanujan from "../assets/srinivasaramanujan.jpg";
import apjabdulkalam from "../assets/apjabdulkalam.jpg";
import swamivivekanand from "../assets/swamivivekanand.jpg";

const Home = () => {
  return (
    <div className="container flex flex-wrap justify-evenly items-center  py-32 font-mono ">
      <Link to="/quiz">
        <div className="card ">
          <img
            src={apjabdulkalam}
            className="rounded-2xl h-60"
            alt="quiz logo"
          />
          <div className="overlay ">APJ ABDUL KALAM</div>
        </div>
      </Link>
      <Link to="/quiz">
        <div className="card">
          <img
            src={swamivivekanand}
            className="rounded-2xl h-60"
            alt="quiz logo"
          />
          <div className="overlay">SWAMI VIVEKANANDA</div>
        </div>
      </Link>
      <Link to="/quiz">
        <div className="card ">
          <img
            src={srinivasaramanujan}
            className="rounded-2xl h-60"
            alt="quiz logo"
          />
          <div className="overlay">SRINIVASA RAMANUJAN</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
