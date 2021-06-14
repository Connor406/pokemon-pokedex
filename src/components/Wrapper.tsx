import { Box } from "@chakra-ui/layout";
import React from "react";

interface WrapperProps {
  variant?: "sm" | "lg";
  bgColor?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant,
  bgColor,
}) => {
  return (
    <Box
      bgColor={bgColor ? bgColor : "white"}
      px={variant === "sm" ? "25%" : "10%"}
      w="100%"
      mx="auto"
      mt={0}
    >
      {children}
    </Box>
  );
};
