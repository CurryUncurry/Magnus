import { Box, BoxProps, IconProps, useToken } from '@chakra-ui/react'
import { colors, iconStyles } from '../../../theme/foundations'
import DropdownArrow from '../../Icons/tokenPrice/DropdownArrow'
import SidebarLabel from '../SidebarLabel'

const TokenPrice = () => {
	const color= useToken('colors', 'white')

	return (
		<>
			<SidebarLabel>TOKEN PRICE</SidebarLabel>
			<Box {...currencyStyle}>
				<Box marginBottom="6px">Course</Box>
				<Box {...dropdownButtonStyle}>
					<span>1 MG = 1.3 $</span>

					<DropdownArrow color={color} {...iconStyle} />
				</Box>
			</Box>
		</>
	)
}

const iconStyle = {
	...iconStyles.dropdownIcon,
	marginLeft: '7px'
} as IconProps

const dropdownButtonStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	cursor: 'pointer'
} as BoxProps

const currencyStyle = {
	width: '176px',
	height: '78px',
	padding: '12px',
	fontWeight: 500,
	color: colors['white'],
	bgImage: `url(${require('../../../public/icons/TokenPrice.svg')})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
} as BoxProps

export default TokenPrice
