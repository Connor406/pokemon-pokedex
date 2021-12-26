import { Box } from "@chakra-ui/layout"
import React from "react"

interface WrapperProps {
  variant?: "sm" | "lg"
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      bgGradient="linear(to-br, #0A285F, #476baf)"
      px={variant === "sm" ? "25%" : "10%"}
      w="100%"
      mx="auto"
      mt={0}
    >
      {children}
    </Box>
  )
}
