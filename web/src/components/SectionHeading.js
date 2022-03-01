import React from "react";
import { Heading } from "@chakra-ui/react";

export default function SectionHeading({ ...props }) {
  return (
    <Heading
      as="h2"
      size="2xl"
      textAlign={"center"}
      _after={{
        content: '""',
        display: "block",
        height: "1px",
        width: "8rem",
        background: "textPrimary",
        margin: "2rem auto",
      }}
      {...props}
    />
  );
}
