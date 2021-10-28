import axios, { AxiosError } from "axios";
import { BASE_URL } from "../helper";
import { Quiz } from "../../types/quiz.types";

const url = `${BASE_URL}/quiz`;


type ServerResponse = {
  success: boolean;
  quizzes: Quiz[];
};

type ServerError = {
  success: boolean;
  message: string;
  errorMessage: string;
  // ??
};

export const getAllQuiz = async () => {
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
