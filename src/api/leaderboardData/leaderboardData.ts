import axios, { AxiosError } from "axios";
import { ServerError } from "../quiz/getQuizData";
import { LeaderBoard } from "../../types/quiz.types";

type ServerResponse = {
  success: boolean;
  leaderBoard: LeaderBoard;
};

export const leaderBoardData = async (url: string) => {
  try {
    const response = await axios.get<ServerResponse>(url);
    return response.data;
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
