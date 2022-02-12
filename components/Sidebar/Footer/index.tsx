import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { colors, iconStyles } from '../../../theme/foundations'
import LightIcon from '../../Icons/theme/LightIcon'
import MoonIcon from '../../Icons/theme/MoonIcon'
import ThemeButton from './ThemeButton'

const themes = [
	{
		label: 'Light',
		icon: (color: string) => (
			<LightIcon {...iconStyles.defaultIcon} color={color} />
		)
	},
	{
		label: 'Dark',
		icon: (color: string) => (
			<MoonIcon {...iconStyles.defaultIcon} color={color} />
		)
	}
]

const Footer = () => {
	const selectedTheme = useAppSelector((state) => state.sidebar.theme)
	return (
		<Box {...footerStyle}>
			{themes.map((theme) => (
				<ThemeButton
					{...theme}
					isActive={theme.label.toLowerCase() === selectedTheme}
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
	background: colors['black']
} as BoxProps

export default Footer
