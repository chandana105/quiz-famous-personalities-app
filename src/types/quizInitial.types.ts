import { Quiz } from "./quiz.types";
import {LeaderBoard} from './quiz.types'


export type initialStateType = {
  loading: boolean;
  quizzes: Quiz[];
  playerName: string;
  currentQuestion: number;
  currentScore: number;
  currentQuiz : string;
  leaderBoard : LeaderBoard[]
};
