import "../styles/global.sass";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
