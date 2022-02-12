import { Box, BoxProps, ColorMode, useColorMode } from '@chakra-ui/react'
import React, { FC } from 'react'
import { iconStyles } from '@theme/foundations'
import LightIcon from '@components/Icons/theme/LightIcon'
import MoonIcon from '@components/Icons/theme/MoonIcon'
import ThemeButton from './ThemeButton'

type ThemesArray = {
	label: string,
	mode: ColorMode,
	icon: (color: string) => JSX.Element
}[]

const themes: ThemesArray = [
	{
		label: 'Light',
		mode: 'light',
		icon: (color: string) => (
			<LightIcon {...iconStyles.defaultIcon} color={color} />
		)
	},
	{
		label: 'Dark',
		mode: 'dark',
		icon: (color: string) => (
			<MoonIcon {...iconStyles.defaultIcon} color={color} />
		)
	}
]

const Footer: FC<BoxProps> = ({ ...rest }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const handleToggle = (mode: ColorMode) => {
		colorMode !== mode && toggleColorMode()
	}
	return (
		<Box {...footerStyle} {...rest}>
			{themes.map((theme) => (
				<ThemeButton
					onClick={() => handleToggle(theme.mode)}
					{...theme}
					isActive={theme.mode === colorMode}
				/>
			))}
		</Box>
	)
}

const footerStyle = {
	marginTop: 'auto',
	padding: '16px',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	background: 'black'
} as BoxProps

export default Footer
