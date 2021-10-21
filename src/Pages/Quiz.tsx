import React from "react";
import apjabdulkalam from "../assets/apjabdulkalam.jpg";

const Quiz = () => {
  return (
    <>
      <div className="container bg-gray-100  flex flex-col flex-wrap justify-center items-center  py-9 font-mono ">
        <div className=" mr-96 mb-2 text-2xl  text-black-500 uppercase font-mono">
          <h1>Chandana, Your score : 0</h1>
        </div>
        <div className="flex  relative cursor-pointer ">
          <img
            src={apjabdulkalam}
            className="rounded-2xl w-full "
            alt="quiz logo"
          />
          <div className="absolute top-0 h-full w-full  bg-black bg-opacity-70  text-white text-2xl grid grid-cols-2 rounded-2xl ">
            <div className="flex flex-col p-6 text-3xl ">
              <strong>Question 1/10</strong>
              <div className="mt-2">
                What is the full name of A P J Abdul Kalam ?
              </div>
            </div>
            {/* check */}
            <div className="flex flex-col justify-around p-6 text-xl  w-full items-start   ">
              <button className="choice-btn">
                Aabideen Parsa Jaban Abdul Kalam
              </button>
              <button className="choice-btn">
                Avul Pakir Jainulabdeen Abdul Kalam
              </button>
              <button className="choice-btn">
                Aabinus Payam Jabbar Abdul Kalam
              </button>
              <button className="choice-btn">
                Aabid Pasha Jabalah Abdul Kalam
              </button>
              <div className="flex items-end w-full justify-end  ">
                <button className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg mr-3 uppercase">
                  Reset
                </button>
                <button className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg uppercase">
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

export default Quiz;
