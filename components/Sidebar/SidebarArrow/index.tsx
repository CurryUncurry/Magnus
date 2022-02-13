import { Box, BoxProps, IconProps } from '@chakra-ui/react'
import { useAppSelector } from '../../../app/hooks'
import { useHover } from '../../../hooks/useHover'
import { colors } from '../../../theme/foundations'
import SidebarArrowIcon from '../../Icons/header/SidebarArrowIcon'

interface IProps {
  onClick: () => void;
  styles: BoxProps;
}

const SidebarArrow = ({ onClick, styles }: IProps) => {
	const [buttonHov, hovHandler] = useHover()
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen)

	return (
		<Box
			as="button"
			{...styles}
			onClick={onClick}
			onMouseEnter={hovHandler(true)}
			onMouseLeave={hovHandler(false)}
		>
			<SidebarArrowIcon
				{...sidebarArrowStyle}
				transform={!isSidebarOpen ? 'rotate(180deg)' : 'none'}
				color={buttonHov ? 'orange' : 'black'}
			/>
		</Box>
	)
}

const sidebarArrowStyle = {
	cursor: 'pointer',
	width: '15px',
	height: '24px',
	transition: '.3s ease'
} as IconProps

export default SidebarArrow
