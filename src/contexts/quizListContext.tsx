import { createContext, useEffect, useReducer } from "react";
import { getAllQuizzes } from "../services/getQuizzes";
import { QuizListContextType } from "../types/quiz.types";
import { quizListReducer } from "../reducers/quizListReducer";

export const QuizListContext = createContext<QuizListContextType>(
  {} as QuizListContextType
);
export const initialState: QuizListContextType = {
  status: "loading",
  quizzes: null,
  error: null,
};

export const QuizListProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(quizListReducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await getAllQuizzes();

      console.log(response);

      if ("quizzes" in response) {
        dispatch({ type: "SET_STATUS", payload: "success" });
        return dispatch({
          type: "SET_QUIZZES",
          payload: response.quizzes,
        });
      }
      dispatch({ type: "SET_STATUS", payload: "error" });
      return dispatch({ type: "SET_ERROR", payload: response });
    })();
  }, []);

  return (
    <QuizListContext.Provider
      value={{
        status: state.status,
        error: state.error,
        quizzes: state.quizzes,
      }}
    >
      {children}
    </QuizListContext.Provider>
  );
};
