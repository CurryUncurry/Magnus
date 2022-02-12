import { Box, BoxProps, Slide } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { colors } from '../../theme/foundations'
import Connect from './Connect'
import Header from './Header'
import Manager from './Manager'
import SidebarLabel from './SidebarLabel'
import TokenPrice from './TokenPrice'
import { open } from './sidebarSlice'
import SidebarArrow from './SidebarArrow'
import NFTAvatar from './NFTAvatar'
import Footer from './Footer'

const Sidebar = () => {
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen)
	const isConnected = useAppSelector((state) => state.wallet.beaconConnection)
	const dispatch = useAppDispatch()

	return (
		<>
			<Slide direction="left" in={isSidebarOpen} style={{ width: 'auto' }}>
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
			</Slide>
			{!isSidebarOpen ? (
				<SidebarArrow
					onClick={() => dispatch(open())}
					styles={sidebarArrowStyle}
				/>
			) : null}
		</>
	)
}

const sidebarStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	paddingBottom: '0px',
	background: colors['black-secondary']
} as BoxProps

const sidebarArrowStyle = {
	marginTop: '22px'
} as BoxProps

export default Sidebar
