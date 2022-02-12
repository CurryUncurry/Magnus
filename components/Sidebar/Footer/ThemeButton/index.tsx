import { Box, BoxProps, useToken } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useHover } from '@hooks/useHover'
import { colors, layerStyles } from '@theme/foundations'

type IProps = {
  icon: (color: string) => ReactNode;
  label: string;
  isActive?: boolean;
} & BoxProps

const ThemeButton = ({ icon, label, isActive = false, ...rest }: IProps) => {
	const [buttonHov, hovHandler] = useHover()
	const white = useToken('colors', 'white')
	const gray94 = useToken('colors', 'gray94')

	return (
		<Box
			as="button"
			{...themeButtonStyle}
			{...unactiveThemeButtonStyle}
			{...(isActive ? activeThemeButtonStyle : {})}
			onMouseEnter={hovHandler(true)}
			onMouseLeave={hovHandler(false)}
			{...rest}
		>
			<Box {...iconStyle}>
				{icon(isActive || buttonHov ? white : gray94)}
				<Box {...pointerStyle(buttonHov || isActive)} />
			</Box>
			{label}
		</Box>
	)
}

const pointerStyle = (isActive: boolean) =>
	({
		background: colors['orange'],
		opacity: !isActive ? '0%' : '100%',
		position: 'absolute',
		borderRadius: '8px',
		left: '3.5px',
		height: '3px',
		transition: '.3s ease',
		width: '12px',
		...layerStyles.orangeShadow
	} as BoxProps)

const iconStyle = {
	marginRight: '8px',
	position: 'relative'
} as BoxProps

const themeButtonStyle = {
	transition: '.3s ease',
	cursor: 'pointer',
	marginTop: 'auto',
	display: 'flex',
	flexDirection: 'row',
	background: colors['black']
} as BoxProps

const activeThemeButtonStyle = {
	color: colors['white']
}

const unactiveThemeButtonStyle = {
	color: colors['gray94'],
	_hover: activeThemeButtonStyle
}

export default ThemeButton
