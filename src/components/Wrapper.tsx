import { Box } from "@chakra-ui/layout";
import React from "react";

interface WrapperProps {
  variant?: "sm" | "lg";
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return <Box paddingX={variant === "sm" ? "25%" : "10%"}>{children}</Box>;
};
