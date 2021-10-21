import React from "react";

const Modal = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto rounded-lg font-mono text-xl  shadow-lg ">
      <div className=" flex justify-between  p-4">
        <div className="font-bold text-3xl">A. P. J. Abdul Kalam</div>
        <button>X</button>
      </div>
      <div className=" p-4 border-t-2 border-b-2 border-black-100 flex flex-col">
        <h1 className=" font-bold text-2xl">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem enim quibusdam eveniet provident pariatur adipisci
          minima quo, obcaecati ab recusandae nihil odit autem aspernatur sequi.
          Quas placeat obcaecati ea voluptatibus!
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
        <button className="modal-btn">
          Let's Play
        </button>
      </div>
    </div>
  );
};

export default Modal;
