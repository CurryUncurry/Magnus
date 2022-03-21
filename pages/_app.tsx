import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import {
	Box,
	BoxProps,
	ChakraProvider,
	ColorModeScript
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import Sidebar from '@components/Sidebar'
import theme from '../theme'
import '@public/fonts/stylesheet.css'
import { useVh } from '@hooks/useVh'
import Head from 'next/head'

export default function App ({ Component, pageProps }: AppProps) {
	const router = useRouter()
	useVh()

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Web site created using create-react-app"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
					integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
					crossOrigin="anonymous"
				/>
				<title>Magnus</title>
			</Head>
			<IntlProvider locale={'en'}>
				<ChakraProvider theme={theme}>
					<Provider store={store}>
						<Box display="flex" flexDirection="row">
							{router.pathname !== '/' ? <Sidebar /> : null}
							<Box {...wrapperStyle}>
								<Component {...pageProps} />
							</Box>
						</Box>
					</Provider>
				</ChakraProvider>
			</IntlProvider>
		</>
	)
}
const wrapperStyle = {
	m: '0 auto',
	p: '28px 32px',
	maxW: '1200px',
	w: '100%'
} as BoxProps
