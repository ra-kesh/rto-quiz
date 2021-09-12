import { initialQuizState } from "../contexts";
import { QuizDataType, QUIZ_ACTION } from "../types";

export const QuizReducer = (
  state: QuizDataType,
  action: QUIZ_ACTION
): QuizDataType => {
  switch (action.type) {
    case "SET_SCORE":
      return { ...state, score: action.payload };

    case "SET_ATTEMPT":
      return { ...state, attempted: action.payload };

    case "SET_QUESTION_NUMBER":
      return { ...state, questionNumber: action.payload };

    case "SET_QUIZ":
      return { ...state, loading: false, quiz: action.payload };

    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "RETAKE":
      return initialQuizState;

    default:
      return state;
  }
};
