import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuizData } from "../hooks";
import { routeQuizResult } from "../utils/routes";
import {
  Box,
  Text,
  useColorModeValue as mode,
  Button,
  Stack,
} from "@chakra-ui/react";
import { MenuItem } from "../components/MenuItem";
import { StatComponent } from "../components/Stat";

export const QuizDetail = () => {
  const [timeOff, setTimeOff] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    quizDispatch,
    quizData,
    loadQuiz,
    checkRightOrWrong,
    isLastQuestion,
    currentQuestion,
    goToNextQuestion,
  } = useQuizData();

  const { score, quiz, questionNumber, loading, attempted } = quizData;
  console.log(attempted);

  useEffect(() => {
    loadQuiz(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeOff === true && !isLastQuestion) {
      quizDispatch({
        type: "SET_QUESTION_NUMBER",
        payload: questionNumber + 1,
      });
      quizDispatch({
        type: "SET_ATTEMPT",
        payload: false,
      });
      setTimeOff(false);
    }
    if (timeOff === true && isLastQuestion) {
      navigate(routeQuizResult(id));
    }
  }, [questionNumber, quizDispatch, timeOff, isLastQuestion, id, navigate]);

  return (
    <Box as="section" bg={mode("gray.50", "gray.800")}>
      {!loading && (
        <Box
          maxW={{ base: "xl", md: "6xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <StatComponent
            questionNumber={questionNumber}
            quiz={quiz}
            score={score}
            setTimeOff={setTimeOff}
          />

          <Text textAlign="left" fontWeight="semibold">
            Q. {currentQuestion?.questionName}
          </Text>
          <Box
            mt="5"
            px="2"
            pb="2"
            bg={mode("white", "gray.700")}
            pt="2"
            rounded="lg"
            overflow="hidden"
            shadow="lg"
          >
            <Box as="ul" listStyleType="none" px="2" pb="2">
              {currentQuestion?.options.map((item) => (
                <Box
                  as="li"
                  key={item._id}
                  my={2}
                  onClick={() => checkRightOrWrong(item)}
                >
                  <MenuItem
                    title={item.optionName}
                    isCorrect={item.isCorrect}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="4"
            mt="8"
            justifyContent="center"
          >
            {!isLastQuestion && !attempted && (
              <>
                <Button
                  size="lg"
                  minW="210px"
                  colorScheme="blue"
                  height="14"
                  px="7"
                  onClick={() =>
                    quizDispatch({
                      type: "SET_QUESTION_NUMBER",
                      payload: questionNumber + 1,
                    })
                  }
                >
                  skip
                </Button>
              </>
            )}
            {!isLastQuestion && attempted && (
              <>
                <Button
                  size="lg"
                  minW="210px"
                  colorScheme="blue"
                  height="14"
                  px="7"
                  onClick={() => goToNextQuestion()}
                >
                  Next
                </Button>
              </>
            )}
            {isLastQuestion && (
              <>
                <Button
                  size="lg"
                  minW="210px"
                  colorScheme="blue"
                  height="14"
                  px="8"
                  onClick={() => navigate(routeQuizResult(id))}
                >
                  submit
                </Button>
              </>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
