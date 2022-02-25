import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/playfair-display-sc";

const theme = {
  styles: {
    global: {
      html: {
        fontSize: "10px",
      },
      body: {
        color: "#454550",
        bg: "#faefed",
      },
    },
  },
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Playfair Display SC, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    primary: "#eeccc7",
    textPrimary: "#454550",
    buttonPrimary: "#911439",
  },
};

export default extendTheme(theme);
