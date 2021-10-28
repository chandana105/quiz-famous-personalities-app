import { Quiz } from "./quiz.types";

export type initialStateType = {
  loading: boolean;
  quizzes: Quiz[];
  playerName: string;
  currentQuestion: number;
  currentScore: number;
};
