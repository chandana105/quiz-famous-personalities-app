import React from "react";
import Modal from "../Components/Modal";
import NameModal from "../Components/NameModal";

const LeaderBoard = () => {
  return (
    <>
      <Modal />
      <NameModal />
      <table
        className="table-auto mx-auto mt-5  uppercase font-mono text-xl"
        role="table"
      >
        <thead>
          <tr
            className=" text-center  border-b-4  border-black text-blue-600 "
            role="row"
          >
            <th className="px-20 py-2">Name</th>
            <th className="px-20 py-2">Quiz</th>
            <th className="px-20 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b-4  border-black  text-center ">
            <td className="px-20 py-2">Chandana</td>
            <td className="px-20 py-2">APJ ABDUL KALAM</td>
            <td className="px-20 py-2">16</td>
          </tr>
          <tr className="border-b-4  border-black text-center ">
            <td className="px-20 py-2">Sanjana</td>
            <td className="px-20 py-2">SWAMI VIVEKANANDA</td>
            <td className="px-20 py-2">50</td>
          </tr>
          <tr className="border-b-4  border-black  text-center  ">
            <td className="px-20 py-2 ">Sita</td>
            <td className="px-20 py-2"> SRINIVASA RAMANUJAN</td>
            <td className="px-20 py-2 ">20</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoard;
