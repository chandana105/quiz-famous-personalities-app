import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/helper";
import { useParams, useNavigate } from "react-router-dom";
import { useQuizprovider } from "../Contexts/QuizProvider";
import * as quizApi from "../api/quiz/getQuiz";
import { Quiz } from "../types/quiz.types";
import srinivasaramanujan from "../assets/sr.png";
import swamivivekanand from "../assets/sv.png";
import apjabdulkalam from "../assets/apj.jpg";
import Spinner from "../Components/Spinner";

type QuizData = Quiz;


const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<QuizData>();
  const {
    state: { loading, currentQuestion, currentScore, playerName },
    dispatch,
  } = useQuizprovider();
  const [isOptionClicked, setIsOptionClicked] = useState<boolean>(false);


  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "SET_LOADING" });
        const response = await quizApi.getQuiz(`${BASE_URL}/quiz/${quizId}`);
        if ("quiz" in response) {
          setQuizData(response.quiz);
          dispatch({
            type: "SET_QUIZ_NAME",
            payload: { quizName: response.quiz.quizName },
          });
        }
      } catch (err) {
        console.log(err, "err");
      }
      dispatch({ type: "SET_LOADING" });
    })();
  }, [dispatch, quizId]);

  const handleNext = () => {
    if (currentQuestion >= 9) {
      navigate("/result");
    } else {
      dispatch({
        type: "NEXT_QUESTION",
      });
      setIsOptionClicked(false);
    }
  };

  const handleReset = () => {
    setIsOptionClicked(false);
    dispatch({
      type: "RESET",
    });
  };

  const quizOptionHandler = (optionStatus: boolean, points: number) => {
    setIsOptionClicked(true);
    if (optionStatus) {
      isOptionClicked ||
        dispatch({
          type: "INCREASE_SCORE",
          payload: { points: points },
        });
    }
  };

  if (loading) {
    return (
      <div className="container mt-32  flex flex-col flex-wrap justify-center items-center  py-9 my-auto text-center font-mono ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="container bg-gray-100  flex flex-col flex-wrap justify-center items-center  py-9 font-mono ">
        <div className="flex justify-between w-9/12 text-center mb-2 text-2xl  text-black-500 uppercase font-mono">
          <h1>
            Welcome <span className="text-yellow-600">{playerName}</span>😀,
            Your score : <span className="text-yellow-600">{currentScore}</span>
          </h1>
          <p>
            Points :{" "}
            <span className="text-yellow-600">
              {quizData?.questions[currentQuestion].points}
            </span>{" "}
          </p>
        </div>
        <div className="flex relative cursor-pointer  ">
          <img
            src={
              quizData?.quizName === "A. P. J. ABDUL KALAM"
                ? apjabdulkalam
                : quizData?.quizName === "SWAMI VIVEKANANDA"
                ? swamivivekanand
                : srinivasaramanujan
            }
            className="rounded-2xl  flex "
            alt="quiz logo"
          />
          <div className="absolute top-0 h-full w-full  bg-black bg-opacity-70  text-white text-2xl grid grid-cols-2 rounded-2xl ">
            <div className="flex flex-col p-6 text-3xl ">
              <strong>
                Question {quizData?.questions[currentQuestion].questionNo}/
                {quizData?.questions.length}
              </strong>
              <div className="mt-2">
                {quizData?.questions[currentQuestion].question}
              </div>
            </div>
            <div className="flex flex-col justify-around p-6 text-xl  w-full items-center">
              {quizData?.questions[currentQuestion].choices.map((choice) => (
                <button
                  className={
                    isOptionClicked
                      ? `choice-btn px-5 w-11/12 ${
                          choice.isRight ? "bg-green-400" : "bg-red-400"
                        } `
                      : `choice-btn px-5 w-11/12`
                  }
                  key={choice.option}
                  onClick={() =>
                    quizOptionHandler(
                      choice.isRight,
                      quizData?.questions[currentQuestion].points
                    )
                  }
                >
                  {choice.option}
                </button>
              ))}

              <div className="flex items-end w-full justify-end  ">
                <button
                  className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg mr-3 uppercase hover:bg-red-500"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg uppercase hover:bg-green-500 "
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
