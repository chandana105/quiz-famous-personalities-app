import quizLogo from "../assets/quizLogo.svg";
import { Link } from "react-router-dom";
import { useQuizprovider } from "../Contexts/QuizProvider";

const NotFound = () => {
  const { dispatch } = useQuizprovider();
  return (
    <>
      <div className="container   flex flex-col flex-wrap justify-center items-center  py-9 font-mono  ">
        <div className="flex relative cursor-pointer rounded-2xl ">
          <img
            src={quizLogo}
            className="rounded-2xl h-1/6 flex  "
            alt="quiz logo"
          />
          <div className="absolute top-0 h-full w-full  bg-black bg-opacity-70  text-white text-2xl flex justify-center items-center  rounded-2xl text-center ">
            <div className="flex flex-col h-full  p-6 justify-evenly items-center ">
              <h1 className="text-4xl">PAGE NOT FOUND</h1>
              <div className="flex justify-center items-center w-full mt-5  ">
                <Link to="/">
                  <button
                    className="px-4  py-2 rounded-lg border-solid border-2  border-light-blue-500 tracking-wider text-lg mr-3 uppercase hover:bg-blue-500"
                    onClick={() => dispatch({ type: "RESET" })}
                  >
                    TAKE ME HOME
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
