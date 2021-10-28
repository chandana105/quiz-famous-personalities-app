import quizLogo from "../assets/quizLogo.svg";
import { useQuizprovider } from "../Contexts/QuizProvider";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation()
  console.log( location.state);
  const {
    state: { currentScore, playerName },
    dispatch,
  } = useQuizprovider();
  const navigate = useNavigate();
  return (
    <>
      <div className="container   flex flex-col flex-wrap justify-center items-center  py-9 font-mono  ">
        <div className="flex relative cursor-pointer    rounded-2xl    ">
          <img
            src={quizLogo}
            className="rounded-2xl h-96  flex  "
            alt="quiz logo"
          />
          <div className="absolute top-0 h-full w-full  bg-black bg-opacity-70  text-white text-2xl flex justify-center items-center  rounded-2xl text-center ">
            <div className="flex flex-col  p-6 text-3xl ">
              <div>
                <span className="uppercase">{playerName}</span> Your score
                is&nbsp;
                {currentScore} 
              </div>
              <div className="flex justify-center items-center w-full mt-5  ">
                <Link to="/">
                  <button
                    className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500  text-lg mr-3 uppercase hover:bg-blue-500"
                    onClick={() => dispatch({ type: "RESET" })}
                  >
                    Home
                  </button>
                </Link>
                <button
                  className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500  text-lg mr-3 uppercase hover:bg-blue-500"
                  onClick={() => {
                    dispatch({ type: "RESET" });
                    navigate(-1);
                  }}
                >
                  Play Again
                </button>
                <Link to="/leaderboard">
                  <button className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500  text-lg uppercase hover:bg-blue-500 ">
                    LeaderBoard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
