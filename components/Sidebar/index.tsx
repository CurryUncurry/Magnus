import { Box, BoxProps, ResponsiveValue } from '@chakra-ui/react'
import { useAppSelector } from '../../app/hooks'
import { colors } from '../../theme/foundations'
import Connect from './Connect'
import Header from './Header'
import Manager from './Manager'
import TokenPrice from './TokenPrice'
import NFTAvatar from './NFTAvatar'
import Footer from './Footer'

const sidebarWidth: ResponsiveValue<string> = '323px'

const Sidebar = () => {
	const isConnected = useAppSelector((state) => state.wallet.beaconConnection)
	return (
		<>
			<Box {...sidebarPlaceholder}>
				<Box {...sidebarStyle}>
					<Box padding="28px">
						<Header />
						<Connect />
						{isConnected ? <NFTAvatar /> : null}
						<Manager />
						<TokenPrice />
					</Box>
					<Footer />
				</Box>
			</Box>
		</>
	)
}

const sidebarStyle = {
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '0px',
	background: colors['black-secondary'],
	h: 'calc(100 * var(--vh))',
	pos: 'fixed',
	left: 0,
	top: 0,
	w: sidebarWidth
} as BoxProps

const sidebarPlaceholder = {
	w: sidebarWidth,
	h: '100%'
} as BoxProps

export default Sidebar
