import React, { useEffect } from "react";
import { useQuizprovider } from "../Contexts/QuizProvider";
import { BASE_URL } from "../api/helper";
import Spinner from "../Components/Spinner";
import { leaderBoardData } from "../api/leaderboardData/leaderboardData";

const url = `${BASE_URL}/leaderBoard`;

const LeaderBoardPage = () => {
  const {
    state: { leaderBoard, loading },
    dispatch,
  } = useQuizprovider();

  useEffect(() => {
    (async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const data = await leaderBoardData(url);
        if ("leaderBoard" in data) {
          dispatch({
            type: "ADD_TO_LEADERBOARD",
            payload: { leaderBoard: data.leaderBoard },
          });
        }
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: "SET_LOADING" });
    })();
  }, [dispatch]);

  const sortedLeaderBoard = leaderBoard.sort((a, b) => b.score - a.score);

  if (loading) {
    return (
      <div className="container mt-32  flex flex-col flex-wrap justify-center items-center  py-9 my-auto text-center font-mono ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <table
        className="table-auto mx-auto mt-5  uppercase font-mono text-xl"
        role="table"
      >
        <thead>
          <tr
            className=" text-center  border-b-4  border-black text-blue-600 "
            role="row"
          >
            <th className="px-20 py-2">PlayerName</th>
            <th className="px-20 py-2">Quiz</th>
            <th className="px-20 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderBoard.map((enteries) => (
            <tr
              className=" border-b-4  border-black  text-center "
              key={enteries._id}
            >
              <td className="px-20 py-2">{enteries.playerName}</td>
              <td className="px-20 py-2">{enteries.quizName}</td>
              <td className="px-20 py-2">{enteries.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoardPage;
