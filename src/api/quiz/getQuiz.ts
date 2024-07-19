import axios, { AxiosError } from "axios";
import { Quiz } from "../../types/quiz.types";
import { ServerError } from "./getQuizData";

type ServerResponse = {
  success: boolean;
  quiz: Quiz;
};

export const getQuiz = async (url: string) => {
  try {
    const { data } = await axios.get<ServerResponse>(url);
    return data;
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
