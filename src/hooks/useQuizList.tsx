import { useContext } from "react";
import { QuizListContext } from "../contexts";

export const useQuizList = () => {
  const { status, quizzes, error } = useContext(QuizListContext);
  console.log(quizzes);
  return {
    status,
    quizzes,
    error,
  };
};
