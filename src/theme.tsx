import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  initialColorMode: "light",
  colors: {
    black: "#16161D",
    blue: "#0A285F",
    lightBlue: "#3c6ea8",
    yellow: "#FFCC00",
    red: "#FB1B1B",
  },
  fonts,
  breakpoints,
})

export default theme
