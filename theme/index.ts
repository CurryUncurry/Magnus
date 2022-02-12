import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { colors, fontSizes, layerStyles, textStyles } from './foundations'
import components from './components'
import styles from './styles'

const theme: ThemeConfig = extendTheme({
	fonts: {
		body: 'Gilroy, sans-serif',
		heading: 'Gilroy, sans-serif'
	},
	colors,
	radii: {
		base: '0.5rem'
	},
	textStyles,
	layerStyles,
	fontSizes,
	styles,
	components,
	initialColorMode: 'dark',
	useSystemColorMode: true
})

export default theme
