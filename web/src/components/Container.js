import { Box } from "@chakra-ui/react";
import React from "react";

export default function Container({ ...props }) {
  return (
    <Box
      maxW="960px"
      mx="auto"
      padding="0 1.6rem"
      overflow={"hidden"}
      {...props}
    />
  );
}
