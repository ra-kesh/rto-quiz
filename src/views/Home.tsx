import { useQuizList } from "../hooks/useQuizList";
import { routeQuizDetail } from "../utils/routes";
import { Hero } from "../components/Hero";

export const Home = () => {
  const { quizzes } = useQuizList();
  return (
    <div>
      {quizzes?.map((quiz) => (
        <div key={quiz._id}>
          <Hero quiz={quiz} routeQuizDetail={routeQuizDetail} />
        </div>
      ))}
    </div>
  );
};
