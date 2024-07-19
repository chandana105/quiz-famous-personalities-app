import { leaderBoardData } from "./leaderboardData";
import axios from "axios";
import { BASE_URL } from "../helper";

const url = `${BASE_URL}/leaderBoard`;

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("get LeaderBoard data", () => {
  test("should return LeaderBoard details when API call is successful", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          _id: "1234",
          playerName: "Harry",
          quizName: "SRINIVASA RAMANUJAN",
          score: 50,
        },
      ],
    });

    const leaderBoard = await leaderBoardData(url);

    expect(leaderBoard).toEqual([
      {
        _id: "1234",
        playerName: "Harry",
        quizName: "SRINIVASA RAMANUJAN",
        score: 50,
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

    const error = await leaderBoardData(url);

    expect(error).toEqual({
      success: false,
      message: "Error while getting the quiz data",
      errorMessage: "Something went wrong!",
    });
  });
});


// npm run test -- --coverage .