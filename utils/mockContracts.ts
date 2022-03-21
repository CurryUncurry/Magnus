import { MGSContract } from '@config/constants'
import { TezosToolkit } from '@taquito/taquito'

export const sendTezos = async (Tezos: TezosToolkit) => {
	const op = await Tezos.wallet
		.transfer({ to: 'tz1UBCNrukgRZeBpVELXfrYZsZeUtue8YBmP', amount: 1 })
		.send()
	await op.confirmation()
}

const getTransferParams = (from: string, amount: number) => [
	{
		from_: from,
		txs: [
			{
				to_: 'tz1UBCNrukgRZeBpVELXfrYZsZeUtue8YBmP',
				token_id: 0,
				amount: amount
			}
		]
	}
]

export const sendMagnus = async (Tezos: TezosToolkit, amount: string, userAddress: string) => {
	const contract = await Tezos.wallet.at(MGSContract)
	const op = await contract.methods.transfer(getTransferParams(userAddress, parseInt(amount))).send()
	await op.confirmation()
}
