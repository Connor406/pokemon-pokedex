import { Box, chakra, Text } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { useAtom } from "jotai"
import { loaderAtom } from "../store"

const MotionBox = motion.custom(Box)

function Loader() {
  const [isLoading] = useAtom(loaderAtom)

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Box w="100vw" textAlign="center" display={isLoading ? "inherit" : "none"}>
        <MotionBox
          pos="fixed"
          top="40vh"
          left="calc(50vw - 40px)"
          w="80px"
          h="40px"
          bg="red"
          border="4px solid black"
          borderTopLeftRadius="40px"
          borderTopRightRadius="40px"
          animate={{ x: 0, rotateZ: 0, opacity: 1 }}
          initial={{ x: 100, rotateZ: -180, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          zIndex="20"
        />

        <MotionBox
          pos="fixed"
          top="calc(40vh + 40px)"
          left="calc(50vw - 40px)"
          w="80px"
          h="40px"
          bg="white"
          border="4px solid black"
          borderBottomLeftRadius="40px"
          borderBottomRightRadius="40px"
          animate={{ x: 0, rotateZ: 0 }}
          initial={{ x: -100, rotateZ: 180 }}
          transition={{ duration: 0.6, type: "spring" }}
          zIndex="20"
        />
        <Box bg="black" h="100vh" w="100vw" opacity=".5" pos="absolute" />
      </Box>
    </AnimatePresence>
  )
}

export default Loader
