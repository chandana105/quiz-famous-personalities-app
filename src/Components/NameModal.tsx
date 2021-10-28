import React from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useQuizprovider } from "../Contexts/QuizProvider";

type NameModalProps = {
  data: string;
  showNameModal: boolean;
  handleCloseNameModal: () => void;
};

const NameModal = (props: NameModalProps) => {
  const { data, showNameModal, handleCloseNameModal } = props;
  const {
    state: { playerName },
    dispatch,
  } = useQuizprovider();
  return (
    <>
      <div
        className={
          showNameModal
            ? `bg-black bg-opacity-70  z-40 fixed top-0 left-0 bottom-0 right-0`
            : "hidden"
        }
        onClick={handleCloseNameModal}
      ></div>
      <div
        className={
          showNameModal
            ? "flex flex-col max-w-xl mx-auto rounded-lg font-mono text-xl  shadow-lg z-50 absolute bg-white "
            : "hidden"
        }
      >
        <div className=" flex justify-between  p-6 px-8 ">
          <div className="font-bold text-2xl">May I have your name please?</div>
          <button
            onClick={handleCloseNameModal}
            className="absolute top-2 right-1"
          >
            <GrClose />
          </button>
        </div>
        <div className=" p-4 border-t-2 border-b-2 border-black-100 text-center ">
          <input
            type="text"
            value={playerName}
            placeholder="Enter your name"
            className="border-b-2 border-black  "
            onChange={(e) =>
              dispatch({
                type: "SET_PLAYER_NAME",
                payload: { playerName: e.target.value },
              })
            }
          />
        </div>
        <div className="p-4 flex justify-end ">
          <Link to={`/quiz/${data}`}>
            <button
              className={`hover:bg-yellow-300 modal-btn ${
                playerName.length === 0 && "cursor-not-allowed"
              } `}
              disabled={playerName.length === 0}
              onClick={handleCloseNameModal}
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NameModal;
