import quizLogo from "../assets/quizLogo.svg";
import { useQuizprovider } from "../Contexts/QuizProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../api/helper";
import { Toast } from "../Components/Toast";
import * as finalResults from "../api/result/saveResult";

const url = `${BASE_URL}leaderBoard`;

const Result = () => {
  const {
    state: { currentScore, playerName, loading, currentQuiz },
    dispatch,
  } = useQuizprovider();
  const navigate = useNavigate();

  const saveResult = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await finalResults.saveResult(url, {
        playerName: playerName,
        quizName: currentQuiz,
        score: currentScore,
      });
      if ("NewLeaderBoardEntry" in data) {
        Toast("Score got Saved!");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <>
      <div className="container   flex flex-col flex-wrap justify-center items-center  py-9 font-mono  ">
        <div className="flex relative cursor-pointer rounded-2xl ">
          <img
            src={quizLogo}
            className="rounded-2xl h-2/6 flex  "
            alt="quiz logo"
          />
          <div className="absolute top-0 h-full w-full  bg-black bg-opacity-70  text-white text-2xl flex justify-center items-center  rounded-2xl text-center ">
            <div className="flex flex-col h-full  p-6 justify-evenly items-center ">
              <h1 className="text-3xl">
                <span className="uppercase">{playerName}</span> Your score
                is&nbsp;
                {currentScore}
              </h1>
              {currentScore !== 0 && playerName.length !== 0 && (
                <div className="flex justify-center items-center">
                  <span>Do you want to save your Score?</span>
                  <button
                    className={`px-4  py-2 rounded-lg active:border-solid border-2  hover:border-primary  ml-4  text-3xl uppercase hover:bg-blue-500 ${
                      loading && "cursor-not-allowed"
                    } `}
                    disabled={loading === true}
                    onClick={saveResult}
                  >
                    {loading ? "SAVING..." : "YES"}
                  </button>
                </div>
              )}
              <div className="flex justify-center items-center w-full mt-5  ">
                <Link to="/">
                  <button
                    className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg mr-3 uppercase hover:bg-blue-500"
                    onClick={() => dispatch({ type: "RESET" })}
                  >
                    Home
                  </button>
                </Link>
                <button
                  className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg mr-3 uppercase hover:bg-blue-500"
                  onClick={() => {
                    dispatch({ type: "RESET" });
                    navigate(-1);
                  }}
                >
                  Play Again
                </button>
                <Link to="/leaderboard">
                  <button className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg uppercase hover:bg-blue-500 ">
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
