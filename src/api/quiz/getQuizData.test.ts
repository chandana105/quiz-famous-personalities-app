import { getAllQuiz } from "./getQuizData";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("get All quizzes", () => {
  test("should return all quizzes when API call is successful", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          _id: "1234",
          quizName: "A. P. J. ABDUL KALAM",
          questions: [],
        },
      ],
    });

    const quizzes = await getAllQuiz();

    expect(quizzes).toEqual([
      {
        _id: "1234",
        quizName: "A. P. J. ABDUL KALAM",
        questions: [],
      },
    ]);
  });

  test("should return errorMessage when API call fails", async () => {
    mockedAxios.get.mockRejectedValue({
      response: {
        data: {
          success: false,
          message: "Error while getting the quiz data",
          errorMessage: "Something went wrong!",
        },
      },
    });

    mockedAxios.isAxiosError.mockImplementation((_) => true);

    const error = await getAllQuiz();

    expect(error).toEqual({
      success: false,
      message: "Error while getting the quiz data",
      errorMessage: "Something went wrong!",
    });
  });
});
