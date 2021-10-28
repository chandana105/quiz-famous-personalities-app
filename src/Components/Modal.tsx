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
          // dispatch({
          //   type: "SET_PLAYER_NAME",
          //   payload: { playerName: "" },
          // });
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem enim quibusdam eveniet provident pariatur adipisci
            minima quo, obcaecati ab recusandae nihil odit autem aspernatur
            sequi. Quas placeat obcaecati ea voluptatibus!
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

// home pr humen quizmodel open rkna bydefautl its false, toh showmodal = false, toh in context,
// vaise toh we just want it in usestate for that pg only , toh usestate..
// toh ab modal comp mein kya aayega vo idhar likhan:- it ll gt the id of the quiz on whcoh modal was open, then shoemodal
