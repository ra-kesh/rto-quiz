import "./App.css";
import {
  ROUTE_HOME,
  ROUTE_QUIZ_DETAIL,
  ROUTE_QUIZ_RESULT,
} from "./utils/routes";
import { Routes, Route } from "react-router-dom";
import { Home, QuizDetail, QuizResult } from "./views";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={4}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Routes>
              <Route path={ROUTE_HOME} element={<Home />} />
              <Route path={ROUTE_QUIZ_DETAIL} element={<QuizDetail />} />
              <Route path={ROUTE_QUIZ_RESULT} element={<QuizResult />} />
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
