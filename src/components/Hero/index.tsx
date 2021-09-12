import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { useNavigate } from "react-router";

export function Hero({ quiz, routeQuizDetail }: any) {
  const navigate = useNavigate();

  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} pt="16" pb="24">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "3rem", lg: "2rem" }}
          mt="8"
          align={{ lg: "center" }}
          justify="space-between"
          textAlign="left"
        >
          <Box flex="1" maxW={{ lg: "520px" }}>
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode("blue.600", "blue.300")}
              letterSpacing="wide"
            >
              Drive Safe
            </Text>
            <Heading
              as="h1"
              size="2xl"
              color={mode("blue.600", "blue.300")}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {quiz.name}
            </Heading>
            <Text
              color={mode("gray.600", "gray.400")}
              mt="4"
              fontSize="lg"
              fontWeight="medium"
            >
              Ace your Next Driving License Test With Confidence .
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing="4" mt="8">
              <Button
                size="md"
                minW="210px"
                colorScheme="blue"
                height="14"
                px="8"
                onClick={() => navigate(routeQuizDetail(quiz._id))}
              >
                Get Started
              </Button>
            </Stack>
          </Box>
          <Box
            pos="relative"
            w={{ base: "full", lg: "560px" }}
            h={{ base: "auto", lg: "560px" }}
          >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: "100%" }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode("gray.200", "gray.700")}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
