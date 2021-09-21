import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { useQuizData } from "../hooks";

interface MenuItemProps {
  title: string;
  isCorrect: boolean;
}

export const MenuItem = (props: MenuItemProps) => {
  const { title, isCorrect } = props;
  const { quizData } = useQuizData();

  const correctAnswerColor = mode("green.300", "green.400");
  const wrongAnswerColor = mode("red.500", "red.600");

  const getOptionStyles = () => {
    if (quizData.attempted) {
      if (isCorrect) {
        return correctAnswerColor;
      } else if (!isCorrect) {
        return wrongAnswerColor;
      }
    }
  };

  const getHoverstyle = () => {
    if (!quizData.attempted) {
      return mode("gray.50", "gray.600");
    }
  };

  return (
    <Box
      display="block"
      px="5"
      py="3"
      rounded="lg"
      transition="0.2s background"
      _hover={{ bg: getHoverstyle() }}
      textAlign="left"
      cursor="pointer"
      bg={getOptionStyles()}
    >
      <Text
        display="inline-block"
        transition="0.2s all"
        _groupHover={{ color: "blue.500" }}
      >
        {title}
      </Text>
    </Box>
  );
};
