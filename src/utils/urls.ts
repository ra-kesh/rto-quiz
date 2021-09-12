export const ROOT_PATH = "https://protected-everglades-40139.herokuapp.com";

export const API_QUIZZES = `${ROOT_PATH}/api/quizzes`;

export const getQuizApi = (id: string): string =>
  `${ROOT_PATH}/api/quizzes/${id}`;
