import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";

interface MenuItemProps {
  title: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { title } = props;
  return (
    <Box
      display="block"
      px="5"
      py="3"
      rounded="lg"
      transition="0.2s background"
      _hover={{ bg: mode("gray.50", "gray.600") }}
      textAlign="left"
      cursor="pointer"
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
