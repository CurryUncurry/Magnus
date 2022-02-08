import "../styles/global.sass";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider>
      <Provider store={store}>
        {router.pathname !== '/' ? <Header /> : null}
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
