import axios, { AxiosError } from "axios";
import { Quiz } from "../../types/quiz.types";

type ServerResponse = {
  success: boolean;
  quiz: Quiz;
};

type ServerError = {
  success: boolean;
  message: string;
  errorMessage: string;
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
