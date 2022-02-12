import { Box, BoxProps } from '@chakra-ui/react'
import Delimiter from './SidebarLabel'
import Connect from './Connect'
import Manager from './Manager'

const Sidebar = () => {
	return (
		<Box {...sidebarStyle}>
			<Connect />
			<Manager />
			<Delimiter>TOKEN PRICE</Delimiter>
			<Delimiter>MY NFT AVATAR</Delimiter>
		</Box>
	)
}

const sidebarStyle = {
	width: '232px',
	background: '#111111'
} as BoxProps

export default Sidebar
