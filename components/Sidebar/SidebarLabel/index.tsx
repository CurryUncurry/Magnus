import { Box, useColorModeValue } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode;
}

const SidebarLabel = ({ children }: IProps) => {
	const color = useColorModeValue('black', 'gray94')

	return (
		<Box color={color} {...delimeterStyle}>{children}</Box>
	)
}

const delimeterStyle = {
	fontSize: '12px',
	fontWeight: '500',
	margin: '11px 0'
}

export default SidebarLabel
