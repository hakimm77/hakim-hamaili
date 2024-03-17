import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../utils/colors";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: colors.bg,
        color: colors.text,
        fontFamily: "Inter",
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
