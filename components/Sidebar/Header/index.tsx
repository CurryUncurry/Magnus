import { Box, BoxProps, IconProps, useToken } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import LogoIcon from '@components/Icons/header/LogoIcon'

const Header = () => {
	const color = useToken('colors', 'white')

	return (
		<Box position="relative" marginBottom="33px">
			<Link href="/dashboard">
				<a>
					<LogoIcon color={color} {...logoIconStyle} />
				</a>
			</Link>
		</Box>
	)
}

const logoIconStyle = {
	width: '32px',
	height: '32px'
} as IconProps

export default Header
