import React, { useEffect } from 'react'
import { BeaconWallet } from '@taquito/beacon-wallet'
import {
	NetworkType,
	BeaconEvent,
	defaultEventCallbacks
} from '@airgap/beacon-sdk'
import { RPCURL } from '../../../../../config/constants'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import {
	connect,
	setPublicToken,
	setWallet
} from '../../../../../app/walletSlice'
import ConnectWalletButton from '../ConnectWalletButton'

const ConnectButton = () => {
	const wallet = useAppSelector((state) => state.wallet.wallet)
	const tezos = useAppSelector((state) => state.tezos.tezos)
	const dispatch = useAppDispatch()

	const connectWallet = async (): Promise<void> => {
		try {
			if (wallet) {
				await wallet.requestPermissions({
					network: {
						type: NetworkType.HANGZHOUNET,
						rpcUrl: RPCURL
					}
				})
				const userAddress = await wallet.getPKH()
				dispatch(connect(userAddress))
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		(async () => {
			const wallet = new BeaconWallet({
				name: 'Magnus DAO',
				preferredNetwork: NetworkType.HANGZHOUNET,
				disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
				eventHandlers: {
					// To keep the pairing alert, we have to add the following default event handlers back
					[BeaconEvent.PAIR_INIT]: {
						handler: defaultEventCallbacks.PAIR_INIT
					},
					[BeaconEvent.PAIR_SUCCESS]: {
						handler: (data) => {
							dispatch(setPublicToken(data.publicKey))
						}
					}
				}
			})
			tezos.setWalletProvider(wallet)
			dispatch(setWallet(wallet))
			// checks if wallet was connected before
			const activeAccount = await wallet.client.getActiveAccount()
			if (activeAccount) {
				const userAddress = await wallet.getPKH()
				connect(userAddress)
			}
		})()
	}, [])

	return (
		<ConnectWalletButton onClick={connectWallet}>
      Connect Wallet
		</ConnectWalletButton>
	)
}

export default ConnectButton
