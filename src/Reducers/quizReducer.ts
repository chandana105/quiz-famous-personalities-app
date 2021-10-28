import { initialStateType } from "../types/quizInitial.types";
import { QuizActionType } from "./quizReducer.types";

const quizReducer = (state: initialStateType, action: QuizActionType) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: !state.loading };
    case "INITIALIZE_QUIZZES":
      return {
        ...state,
        quizzes: action.payload.quizzes,
      };
    case "SET_PLAYER_NAME":
      return {
        ...state,
        playerName: action.payload.playerName,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "INCREASE_SCORE":
      return {
        ...state,
        currentScore: state.currentScore + action.payload.points,
      };
    case "RESET":
      return {
        ...state,
        currentQuestion: 0,
        currentScore: 0,
      };
    default:
      return state;
  }
};

export default quizReducer;
