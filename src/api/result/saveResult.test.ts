import { saveResult } from "./saveResult";
import axios from "axios";
import { BASE_URL } from "../helper";

const url = `${BASE_URL}/leaderBoard`;

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("post LeaderBoard data", () => {
  test("should save player score details to the LeaderBoard when API call is successful", async () => {
    mockedAxios.post.mockResolvedValue({
      data: {
        playerName: "Chandana",
        quizName: "SWAMI VIVEKANANDA",
        score: 25,
      },
    });

    const savedResult = await saveResult(url, {
      playerName: "Chandana",
      quizName: "SWAMI VIVEKANANDA",
      score: 25,
    });

    expect(savedResult).toEqual({
      playerName: "Chandana",
      quizName: "SWAMI VIVEKANANDA",
      score: 25,
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

    const error = await saveResult(url, {
      playerName: "Chandana",
      quizName: "SRINIVAS RAMANUJAN",
      score: 25,
    });

    expect(error).toEqual({
      success: false,
      message: "Error while getting the quiz data",
      errorMessage: "Something went wrong!",
    });
  });
});
