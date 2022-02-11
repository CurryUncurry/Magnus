import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { disconnect as walletDisconnect } from '../../../../../app/walletSlice'
import { disconnect as tezosDisconnect } from '../../../../../app/tezosSlice'
import ConnectWalletButton from '../ConnectWalletButton'

const DisconnectButton = () => {
	const wallet = useAppSelector((state) => state.wallet.wallet)
	const dispatch = useAppDispatch()

	const disconnectWallet = async (): Promise<void> => {
		if (wallet) {
			await wallet.client.clearActiveAccount()
			await wallet.client.destroy()
		}
		dispatch(walletDisconnect())
		dispatch(tezosDisconnect())
	}

	return (
		<ConnectWalletButton onClick={disconnectWallet}>
      Disconnect wallet
		</ConnectWalletButton>
	)
}

export default DisconnectButton
