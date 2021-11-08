import { getQuiz } from "./getQuiz";
import axios from "axios";
import { BASE_URL } from "../helper";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("get All quizzes", () => {
  test("should return quiz data when API call is successful", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        _id: "1234",
        quizName: "A. P. J. ABDUL KALAM",
        questions: [],
      },
    });

    const quizzes = await getQuiz(`${BASE_URL}/quiz/1234`);

    expect(quizzes).toEqual({
      _id: "1234",
      quizName: "A. P. J. ABDUL KALAM",
      questions: [],
    });
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

    const error = await getQuiz(`${BASE_URL}/quiz/1234`);

    expect(error).toEqual({
      errorMessage: "Something went wrong!",
      message: "Error while getting the quiz data",
      success: false,
    });
  });
});
