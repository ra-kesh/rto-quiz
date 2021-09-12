import { useContext } from "react";
import { QuizContext } from "../contexts";
import { getQuiz } from "../services/getQuiz";

export const useQuizData = () => {
  const { quizData, quizDispatch } = useContext(QuizContext);
  const { quiz, questionNumber, score, attempted } = quizData;
  const currentQuestion = quiz?.questions[questionNumber];
  const isLastQuestion = quiz && questionNumber === quiz?.questions.length - 1;

  const loadQuiz = async (id: string) => {
    const response = await getQuiz(id);

    if ("quiz" in response) {
      return quizDispatch({ type: "SET_QUIZ", payload: response.quiz });
    }
  };

  const checkRightOrWrong = (item: any) => {
    if (item.isCorrect && attempted === false) {
      quizDispatch({ type: "SET_SCORE", payload: score + 10 });
      quizDispatch({
        type: "SET_ATTEMPT",
        payload: true,
      });
    }
    if (!isLastQuestion) {
      quizDispatch({
        type: "SET_QUESTION_NUMBER",
        payload: questionNumber + 1,
      });
      quizDispatch({
        type: "SET_ATTEMPT",
        payload: false,
      });
    }
  };

  return {
    quizData,
    quizDispatch,
    loadQuiz,
    checkRightOrWrong,
    isLastQuestion,
    currentQuestion,
  };
};
