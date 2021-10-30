import React from "react";
import { useState } from "react";
import NameModal from "./NameModal";
import { GrClose } from "react-icons/gr";
import { useQuizprovider } from "../Contexts/QuizProvider";

type ModalProps = {
  data: string;
  showModal: boolean;
  handleClose: () => void;
};

const Modal = (props: ModalProps) => {
  const { data, showModal, handleClose } = props;
  const {
    state: { quizzes },
  } = useQuizprovider();
  const currentQuiz = quizzes.find((quiz) => quiz._id === data);

  const [nameModalData, setNameModalData] = useState<string>("");
  const [showNameModal, setShowNameModal] = useState<boolean>(false);

  const handleLetsPlay = (quizId: string) => {
    handleClose();
    setShowNameModal(true);
    setNameModalData(quizId);
  };

  return (
    <>
      <NameModal
        data={nameModalData}
        showNameModal={showNameModal}
        handleCloseNameModal={() => {
          setShowNameModal(false);
        }}
      />
      <div
        className={
          showModal
            ? `bg-black bg-opacity-70  z-40 fixed top-0 left-0 bottom-0 right-0`
            : "hidden"
        }
        onClick={handleClose}
      ></div>
      <div
        className={
          showModal
            ? `flex flex-col max-w-3xl mx-auto rounded-lg font-mono text-xl  shadow-lg absolute z-50 top-14 bg-white `
            : `hidden`
        }
      >
        <div className=" flex justify-between  p-4">
          <div className="font-bold text-3xl">{currentQuiz?.quizName}</div>
          <button onClick={handleClose}>
            <GrClose />
          </button>
        </div>
        <div className=" p-4 border-t-2 border-b-2 border-black-100 flex flex-col">
          <h1 className=" font-bold text-2xl">Description</h1>
          <p>
            {currentQuiz?.quizName === "A. P. J. ABDUL KALAM"
              ? "Dr APJ Abdul Kalam was a significant believer of 'Simple Living High Thinking'. Sir Abdul Kalam has faced numerous problems throughout his life. His youth was full of struggles, and he wanted to become a fighter pilot.He was determined on his hard work and dedication and he ultimately became a renowned scientist of India. His life is an inspiration for us."
              : currentQuiz?.quizName === "SWAMI VIVEKANANDA"
              ? "Swami Vivekananda was a spiritual leader and social reformer. His lectures, writings, letters, poems, ideas motivated not only the youth of India but also the whole world. He is the founder of Ramakrishna Mission and Belur Math in Calcutta, which are still working towards helping the needy. He was a man of wisdom and a very simple human being.  He laid the true foundations of India's unity as a nation. He taught us how to live together with so many diversities. “Take up one idea, make that one idea your life, think of it, dream of it, let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.” Swami Vivekananda"
              : "Srinivasa Ramanujan lived just for 32 years but during this short span he produced such theorems and formulae which even today remain unfathomable in the present age of super computers. He left behind him about 4000 formulae and theorems. Ramanujan was deeply religious and united spirituality and mathematics. For him the zero represented the Absolute Reality. Researchers are still struggling to understand the source of his remarkable genius in mathematics.Srinivasa Ramanujan is a man whose contributions to the field of mathematics are unmatchable. Furthermore, experts in mathematics worldwide all recognize his tremendous worth. Most noteworthy, Srinivasa Ramanujan made his country proud at a time when India was still under British occupation."}
          </p>
          <h2 className="mt-3 font-bold text-xl ">Rules:</h2>
          <ul className="list-disc px-8">
            <li>This quiz consists of 10 questions</li>
            <li>Each question has single correct option </li>
            <li>Each question carries 5 points</li>
            <li>You can skip any question if you like</li>
          </ul>
        </div>
        <div className="p-4 flex justify-end ">
          <button className="modal-btn" onClick={() => handleLetsPlay(data)}>
            Let's Play
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
