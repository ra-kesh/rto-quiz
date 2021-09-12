import { ServerError } from "../types/quiz.types";
import axios, { AxiosError } from "axios";
import { API_QUIZZES } from "../utils/urls";
import { Quiz } from "../types/quiz.types";

export type QuizList = {
  success: true;
  message: "Quizzes retrieved successfully";
  quizzes: Quiz[];
};

export const getAllQuizzes = async (): Promise<QuizList | ServerError> => {
  try {
    const response = await axios.get<QuizList>(API_QUIZZES);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }

    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
