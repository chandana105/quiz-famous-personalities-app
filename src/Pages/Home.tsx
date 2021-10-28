import React from "react";
import { useState } from "react";
import srinivasaramanujan from "../assets/srinivasaramanujan.jpg";
import apjabdulkalam from "../assets/apjabdulkalam.jpg";
import swamivivekanand from "../assets/swamivivekanand.jpg";
import { useQuizprovider } from "../Contexts/QuizProvider";
import Modal from "../Components/Modal";
import Spinner from "../Components/Spinner";

const Home = () => {
  const {
    state: { quizzes, loading },
    dispatch,
  } = useQuizprovider();
  const [modalData, setModalData] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleQuizClick = (quizId: string) => {
    setShowModal(true);
    setModalData(quizId);
    dispatch({
      type: "SET_PLAYER_NAME",
      payload: { playerName: "" },
    });
  };

  return (
    <div className="container flex flex-wrap justify-evenly items-center  py-32 font-mono z-30">
      <Modal
        data={modalData}
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />

      {loading ? (
        <Spinner  />
      ) : (
        <>
          {quizzes.map((quiz) => (
            <div
              className="card z-30"
              key={quiz._id}
              onClick={() => handleQuizClick(quiz._id)}
            >
              <img
                src={
                  quiz.quizName === "A. P. J. ABDUL KALAM"
                    ? apjabdulkalam
                    : quiz.quizName === "SWAMI VIVEKANANDA"
                    ? swamivivekanand
                    : srinivasaramanujan
                }
                className="rounded-2xl h-60"
                alt="quiz logo"
              />
              <div className="overlay ">{quiz.quizName}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;

// link to /quiz/id will be on start button of second modal
