import React from "react";

const NameModal = () => {
  return (
    <div className="flex flex-col max-w-xl mx-auto rounded-lg font-mono text-xl  shadow-lg ">
      <div className=" flex justify-between  p-4">
        <div className="font-bold text-2xl">May I have your name please?</div>
        <button>X</button>
      </div>
      <div className=" p-4 border-t-2 border-b-2 border-black-100 text-center ">
        <input
          type="text"
          placeholder="Enter your name"
          className="border-b-2 border-black  "
        />
      </div>
      <div className="p-4 flex justify-end ">
        <button className="modal-btn">Start</button>
      </div>
    </div>
  );
};

export default NameModal;
