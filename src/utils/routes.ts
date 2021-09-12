export const ID_PARAM = ":id";
export const ROUTE_HOME = "/";
export const ROUTE_QUIZ_DETAIL = `/quiz/detail/${ID_PARAM}`;
export const ROUTE_QUIZ_RESULT = `/quiz/result/${ID_PARAM}`;
export const routeQuizDetail = (id: string): string => `/quiz/detail/${id}`;
export const routeQuizResult = (id: string): string => `/quiz/result/${id}`;
