import { Quiz } from "../types/quiz.types";
import { LeaderBoard } from "../types/quiz.types";

export type QuizActionType =
  | {
      type: "SET_LOADING";
    }
  | {
      type: "INITIALIZE_QUIZZES";
      payload: { quizzes: Quiz[] };
    }
  | {
      type: "SET_PLAYER_NAME";
      payload: { playerName: string };
    }
  | {
      type: "NEXT_QUESTION";
    }
  | {
      type: "RESET";
    }
  | {
      type: "INCREASE_SCORE";
      payload: { points: number };
    }
  | {
      type: "SET_QUIZ_NAME";
      payload: { quizName: string };
    }
  | {
      type: "ADD_TO_LEADERBOARD";
      payload: { leaderBoard: LeaderBoard[] };
    };
