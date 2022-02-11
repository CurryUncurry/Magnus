import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Box, ChakraProvider } from '@chakra-ui/react'
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import theme from "../theme";
import '../public/fonts/stylesheet.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box display="flex" flexDirection="row">
          {router.pathname !== '/' ? <Sidebar /> : null}
          <Component {...pageProps} />
        </Box>
      </Provider>
    </ChakraProvider>
  );
}
