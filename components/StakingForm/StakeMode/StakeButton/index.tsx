import { Box, BoxProps } from '@chakra-ui/react'
import { useHover } from '@hooks/useHover'
import { layerStyles } from '@theme/foundations'
import { FC, ReactNode } from 'react'

type IProps = {
  onClick: () => void;
  isActive?: boolean;
  children: ReactNode;
} & BoxProps;

const StakeButton: FC<IProps> = ({
	children,
	isActive = false,
	onClick,
	...rest
}) => {
	const [buttonHov, hovHandler] = useHover()
	return (
		<Box
			as="button"
			onClick={onClick}
			{...buttonStyle}
			{...unactiveButtonStyle}
			{...(isActive ? activeButtonStyle : {})}
			onMouseEnter={hovHandler(true)}
			onMouseLeave={hovHandler(false)}
			{...rest}
		>
			{children}
			<Box {...pointerStyle} opacity={buttonHov || isActive ? '100%' : '0%'} />
		</Box>
	)
}

const buttonStyle = {
	fontWeight: 500,
	position: 'relative'
} as BoxProps

const activeButtonStyle = {
	color: 'white'
} as BoxProps

const pointerStyle = {
	position: 'absolute',
	height: '3px',
	width: '80%',
	margin: '0 auto',
	bottom: '0',
	left: 0,
	right: 0,
	borderRadius: '8px',
	bg: 'orange',
	transition: '.3s ease',
	...layerStyles.orangeShadow
} as BoxProps

const unactiveButtonStyle = {
	color: 'gray94',
	transition: '.3s ease',
	_hover: activeButtonStyle
} as BoxProps

export default StakeButton
