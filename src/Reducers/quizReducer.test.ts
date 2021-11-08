import { initialState } from "../Contexts/QuizProvider";
import quizReducer from "./quizReducer";
import { QuizActionType } from "./quizReducer.types";
import { Quiz } from "../types/quiz.types";

describe("testing quiz Reducer", () => {
  test("should toggle loading state", () => {
    const action: QuizActionType = {
      type: "SET_LOADING",
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: true,
      quizzes: [],
      playerName: "",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [],
    });
  });

  test("should initialize quizzes when it is received from the server", () => {
    const action: QuizActionType = {
      type: "INITIALIZE_QUIZZES",
      payload: {
        quizzes: [
          {
            _id: "",
            quizName: "A. P. J. ABDUL KALAM",
            questions: [],
          },
        ],
      },
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [
        {
          _id: "",
          quizName: "A. P. J. ABDUL KALAM",
          questions: [],
        },
      ],
      playerName: "",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [],
    });
  });

  test("should take the playerName from the player", () => {
    const action: QuizActionType = {
      type: "SET_PLAYER_NAME",
      payload: {
        playerName: "Chandana",
      },
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "Chandana",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [],
    });
  });

  test("should change question number on click of Next button", () => {
    const action: QuizActionType = {
      type: "NEXT_QUESTION",
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "",
      currentQuestion: 1,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [],
    });
  });

  test("should increase the score on the selection of correct option", () => {
    const action: QuizActionType = {
      type: "INCREASE_SCORE",
      payload: {
        points: 5,
      },
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "",
      currentQuestion: 0,
      currentScore: 5,
      currentQuiz: "",
      leaderBoard: [],
    });
  });

  test("should update the Quiz Name while a player is playing that quiz", () => {
    const action: QuizActionType = {
      type: "SET_QUIZ_NAME",
      payload: {
        quizName: "A. P. J. ABDUL KALAM",
      },
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "A. P. J. ABDUL KALAM",
      leaderBoard: [],
    });
  });

  test("should get the leaderBoard data from server", () => {
    const action: QuizActionType = {
      type: "ADD_TO_LEADERBOARD",
      payload: {
        leaderBoard: [
          {
            _id: "",
            playerName: "chandana",
            quizName: "SWAMI VIVEKANANDA",
            score: 35,
          },
        ],
      },
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [
        {
          _id: "",
          playerName: "chandana",
          quizName: "SWAMI VIVEKANANDA",
          score: 35,
        },
      ],
    });
  });

  test("should reset the question number and score when Reset is clicked", () => {
    const action: QuizActionType = {
      type: "RESET",
    };

    const updatedState = quizReducer(initialState, action);

    expect(updatedState).toEqual({
      loading: false,
      quizzes: [],
      playerName: "",
      currentQuestion: 0,
      currentScore: 0,
      currentQuiz: "",
      leaderBoard: [],
    });
  });
});
