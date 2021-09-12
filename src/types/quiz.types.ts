import { Dispatch } from "react";

export type ServerError = {
  success: false;
  message: string;
  errorMessage?: string;
};

export type Status = "loading" | "error" | "success";

export type ACTIONTYPE =
  | {
      type: "SET_STATUS";
      payload: "loading" | "success" | "error";
    }
  | {
      type: "SET_QUIZZES";
      payload: Quiz[];
    }
  | {
      type: "SET_ERROR";
      payload: ServerError;
    };

export type Option = {
  _id: string;
  optionName: string;
  isCorrect: boolean;
};

export type Question = {
  _id: string;
  questionName: string;
  options: Option[];
};

export type Quiz = {
  _id: string;
  name: string;
  questions: Question[];
  createdAt?: string;
  updatedAt?: string;
};

export type QuizListContextType = {
  status: Status;
  quizzes: Quiz[] | null;
  error: ServerError | null;
};

export type QuizDataType = {
  score: number;
  quiz: Quiz | null;
  questionNumber: number;
  loading: boolean;
  error: ServerError | null;
  attempted: Boolean;
};

export type QUIZ_ACTION =
  | { type: "SET_SCORE"; payload: number }
  | { type: "SET_ATTEMPT"; payload: boolean }
  | { type: "SET_QUESTION_NUMBER"; payload: number }
  | { type: "SET_ERROR"; payload: ServerError }
  | { type: "RETAKE" }
  | { type: "SET_QUIZ"; payload: Quiz };

export type QuizContextType = {
  quizData: QuizDataType;
  quizDispatch: Dispatch<QUIZ_ACTION>;
};
