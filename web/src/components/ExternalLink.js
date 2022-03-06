import React from "react";
import { Link } from "@chakra-ui/react";

export default function ExternalLink({ href, ...props }) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      {...props}
      _hover={{ textDecoration: "none" }}
    />
  );
}
