import { useAppSelector } from '../../../app/hooks'
import SidebarLabel from '../SidebarLabel'
import Image from 'next/image'
import { Box, BoxProps, IconProps, useToken } from '@chakra-ui/react'
import { colors, iconStyles, layerStyles } from '../../../theme/foundations'
import MoneyIcon from '../../Icons/nftAvatar/MoneyIcon'
import BoostIcon from '../../Icons/nftAvatar/BoostIcon'
import LockIcon from '../../Icons/nftAvatar/LockIcon'
import TimeIcon from '../../Icons/nftAvatar/TimeIcon'

const NFTAvatar = () => {
	const color = useToken('colors', 'white')

	return (
		<>
			<SidebarLabel>MY NFT AVATAR</SidebarLabel>
			<Box display="flex" flexDirection="row" alignItems="center" margin="12px 0">
				<Box minWidth="32px" height="32px">
					<Image src="/mockNFT.png" width={32} height={32} />
				</Box>
				<Box
					{...delimiterStyle}
					transform="matrix(-1, 0, 0, 1, 0, 0);"
					marginRight="8px"
				/>
				<Box {...delimiterStyle} />
				<Box {...boostBlockStyle}>
					<MoneyIcon color={color} {...boostIconStyles} />
					<BoostIcon color={color} {...boostIconStyles} />
					<LockIcon color={color} {...boostIconStyles} />
					<TimeIcon color={color} {...boostIconStyles} />
				</Box>
			</Box>
		</>
	)
}

const boostIconStyles = {
	...iconStyles.defaultIcon,
	color: 'gray94'
} as IconProps

const delimiterStyle = {
	width: '2px',
	height: '12px',
	background: 'orange',
	borderRadius: '6px 0px 0px 6px',
	...layerStyles.orangeShadow
} as BoxProps

const boostBlockStyle = {
	display: 'flex',
	flexDirection: 'row',
	background: 'black',
	justifyContent: 'space-between',
	width: '132px',
	borderRadius: '8px',
	padding: '6px'
} as BoxProps

export default NFTAvatar
