import { Box, BoxProps, useToken } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useHover } from '../../../../hooks/useHover'
import { colors, fontSizes, iconStyles } from '../../../../theme/foundations'

interface IProps {
  icon: (color: string) => ReactNode;
  label: string;
  isActive?: boolean;
}

const ManagerButton = ({ icon, label, isActive = false }: IProps) => {
	const [buttonHov, hovHandler] = useHover()
	const white = useToken('colors', 'white')
	const gray94 = useToken('colors', 'gray94')

	return (
		<Link href={`/${label.toLowerCase()}`}>
			<a>
				<Box
					flexDirection="row"
					{...managerButtonStyle}
					{...unactiveManagerButtonStyle}
					{...(isActive ? activeManagerButtonStyle : {})}
					onMouseEnter={hovHandler(true)}
					onMouseLeave={hovHandler(false)}
				>
					<Box
						{...pointerStyle}
						opacity={isActive || buttonHov ? '100%' : '0%'}
					/>
					<Box {...iconStyle}>
						{icon(isActive || buttonHov ? white : gray94)}
					</Box>
					{label}
				</Box>
			</a>
		</Link>
	)
}

const pointerStyle = {
	height: '19px',
	width: '3px',
	borderRadius: '8px',
	left: 0,
	background: '#F57351',
	boxShadow: '2px 0px 8px rgba(245, 115, 81, 0.45)',
	position: 'absolute',
	transition: '.3s ease'
} as BoxProps

const iconStyle = {
	marginRight: '12px'
} as BoxProps

const managerButtonStyle = {
	cursor: 'pointer',
	padding: '13.5px 0',
	fontSize: fontSizes['text'],
	fontWeight: '500',
	alignItems: 'center',
	display: 'flex'
} as BoxProps

const activeManagerButtonStyle = {
	color: 'white',
	transition: '.3s ease'
} as BoxProps

const unactiveManagerButtonStyle = {
	color: 'gray94',
	_hover: activeManagerButtonStyle
} as BoxProps

export default ManagerButton
