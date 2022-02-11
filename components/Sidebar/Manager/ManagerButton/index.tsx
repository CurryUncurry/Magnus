import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface IProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}

const ManagerButton = ({ icon, label, isActive = false }: IProps) => (
	<Box flexDirection='row' {...managerButtonStyle} {...unactiveManagerButtonStyle}>
		<Box className="pointer" position='absolute' {...pointerStyle}/>
		<Box {...iconStyle}>{icon}</Box>
		{label}
	</Box>
)

const pointerStyle = {
	height: '19px',
	width: '3px',
	borderRadius: '8px',
	left: 0,
	background: '#F57351',
	boxShadow: '2px 0px 8px rgba(245, 115, 81, 0.45)'
	// position: 'absolute',
}

const iconStyle = {
	marginRight: '12px'
}

const managerButtonStyle = {
	cursor: 'pointer',
	padding: '13.5px 28px',
	fontSize: '1rem',
	alignItems: 'center',
	fontWeight: '500',
	display: 'flex'
}

const activeManagerButtonStyle = {
	'.pointer': {

	}
}

const unactiveManagerButtonStyle = {
	color: '#949494',
	_hover: activeManagerButtonStyle
}

export default ManagerButton
