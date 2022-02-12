import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { colors } from '../../../theme/foundations'

interface IProps {
    children: ReactNode
}

const SidebarLabel = ({ children }: IProps) => (
	<Box {...delimeterStyle}>{children}</Box>
)

const delimeterStyle = {
	fontSize: '12px',
	color: colors['gray94'],
	fontWeight: '500',
	padding: '13.5px 28px'
}

export default SidebarLabel
