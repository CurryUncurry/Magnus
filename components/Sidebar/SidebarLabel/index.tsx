import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { colors } from '../../../theme/foundations'

interface IProps {
  children: ReactNode;
}

const SidebarLabel = ({ children }: IProps) => (
	<Box {...delimeterStyle}>{children}</Box>
)

const delimeterStyle = {
	fontSize: '12px',
	color: colors['gray94'],
	fontWeight: '500',
	margin: '11px 0'
}

export default SidebarLabel
