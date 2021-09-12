import { useNavigate } from "react-router-dom";
import { useQuizData } from "../hooks";
import {
  Box,
  Text,
  useColorModeValue as mode,
  Button,
  Stack,
} from "@chakra-ui/react";

export const QuizResult = () => {
  const { quizData, quizDispatch } = useQuizData();
  const navigate = useNavigate();

  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} pt="16" pb="24">
      <Box
        minW={{ base: "xl", md: "5xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Text fontWeight="semibold">{`Your score is ${quizData.score}`}</Text>
        <Text mt="5">
          {quizData.score === 120
            ? "You are ready for the test.."
            : "You need more practice.."}
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="4"
          mt="8"
          justifyContent="center"
        >
          <Button
            size="md"
            minW="210px"
            colorScheme="blue"
            height="14"
            px="8"
            onClick={() => {
              quizDispatch({ type: "RETAKE" });
              navigate(-1);
            }}
          >
            Retake
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
