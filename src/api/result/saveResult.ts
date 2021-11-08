import axios, { AxiosError } from "axios";
import { ServerError } from "../quiz/getQuizData";
import { LeaderBoard } from "../../types/quiz.types";

type ServerResponse = {
  success: boolean;
  NewLeaderBoardEntry: LeaderBoard;
};

type ResultData = {
  playerName: string;
  quizName: string;
  score: number;
};

export const saveResult = async (url: string, resultData: ResultData) => {
  try {
    const response = await axios.post<ServerResponse>(url, resultData);
    // console.log(response, "saveresult");
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    console.log(error);
    return {
      success: false,
      message: "Error while getting the quiz data",
      errorMessage: "Something went wrong!",
    };
  }
};
