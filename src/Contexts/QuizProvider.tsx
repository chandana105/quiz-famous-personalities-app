import React from "react";
import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { initialStateType } from "../types/quizInitial.types";
import quizReducer from "../Reducers/quizReducer";
import * as quizApi from "../api/quiz/getQuizData";

export const initialState = {
  loading: false,
  quizzes: [],
  playerName: "",
  currentQuestion: 0,
  currentScore: 0,
};

const QuizContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "SET_LOADING" });
        const response = await quizApi.getAllQuiz();
        if ("quizzes" in response) {
          dispatch({
            type: "INITIALIZE_QUIZZES",
            payload: { quizzes: response.quizzes },
          });
        }
      } catch (err) {
        dispatch({
          type: "INITIALIZE_QUIZZES",
          payload: { quizzes: [] },
        });
      }
      dispatch({ type: "SET_LOADING" });
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizprovider = () => {
  return useContext(QuizContext);
};
