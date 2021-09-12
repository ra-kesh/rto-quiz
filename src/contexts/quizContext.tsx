import { useReducer } from "react";
import { createContext } from "react";
import { QuizReducer } from "../reducers/quizReducer";
import { QuizContextType, QuizDataType } from "../types";

export const QuizContext = createContext<QuizContextType>(
  {} as QuizContextType
);

export const initialQuizState: QuizDataType = {
  score: 0,
  quiz: null,
  questionNumber: 0,
  attempted: false,
  loading: true,
  error: null,
};

export const QuizProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(QuizReducer, initialQuizState);

  return (
    <QuizContext.Provider value={{ quizData: state, quizDispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
