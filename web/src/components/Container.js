import { Box } from "@chakra-ui/react";
import React from "react";

export default function Container({ ...props }) {
  return <Box maxW="960px" mx="auto" {...props} />;
}
