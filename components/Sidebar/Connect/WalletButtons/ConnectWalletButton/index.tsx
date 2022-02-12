import React, { FunctionComponent, ReactNode } from 'react'
import { Box, BoxProps, useToken } from '@chakra-ui/react'
import PlusIcon from '../../../../Icons/connect/PlusIcon'
import { useHover } from '../../../../../hooks/useHover'
import colors from '../../../../../theme/foundations/colors'
import { fontSizes, iconStyles } from '../../../../../theme/foundations'

interface IProps {
    children: ReactNode;
    onClick: () => void;
}

const ConnectWalletButton: FunctionComponent<IProps> = ({ children, ...rest }) => {
	const [buttonHov, hovHandler] = useHover()
	const white = useToken('colors', 'white')
	const orange = useToken('colors', 'orange')
	const grey = useToken('colors', 'grey')
	return (
		<Box
			as="button"
			{...rest}
			{...buttonStyle}
			onMouseEnter={hovHandler(true)}
			onMouseLeave={hovHandler(false)}
		>
			<span>{children}</span>
			<PlusIcon
				bgColor={buttonHov ? orange : grey}
				color={white}
				{...iconStyles.defaultIcon}
			/>
		</Box>
	)
}

const buttonStyle = {
	padding: '11px 28px',
	display: 'flex',
	fontSize: fontSizes['text'],
	color: colors['white'],
	alignItems: 'center',
	justifyContent: 'space-between',
	background: 'none',
	width: '100%'
} as BoxProps

export default ConnectWalletButton
