import { ACTIONTYPE, QuizListContextType } from "../types/quiz.types";

export const quizListReducer = (
  state: QuizListContextType,
  action: ACTIONTYPE
): QuizListContextType => {
  switch (action.type) {
    case "SET_QUIZZES":
      return { ...state, quizzes: action.payload };

    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
