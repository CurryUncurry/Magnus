import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html>
			<Head><ColorModeScript initialColorMode={theme.initialColorMode} /></Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
