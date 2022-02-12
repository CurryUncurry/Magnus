import { Box, BoxProps, IconProps, useToken } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import LogoIcon from '../../Icons/header/LogoIcon'
import SidebarArrow from '../SidebarArrow'
import { close } from '../sidebarSlice'

const Header = () => {
	const dispatch = useAppDispatch()
	const color = useToken('colors', 'white')

	return (
		<Box position="relative" marginBottom="33px">
			<Link href="/dashboard">
				<a>
					<LogoIcon color={color} {...logoIconStyle} />
				</a>
			</Link>
			<SidebarArrow
				onClick={() => dispatch(close())}
				styles={sidebarArrowStyle}
			/>
		</Box>
	)
}

const logoIconStyle = {
	width: '32px',
	height: '32px'
} as IconProps

const sidebarArrowStyle = {
	position: 'absolute',
	right: '-28px',
	top: '4px'
} as BoxProps

export default Header
