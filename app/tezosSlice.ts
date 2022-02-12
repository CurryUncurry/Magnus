import { createSlice } from '@reduxjs/toolkit'
import { TezosToolkit } from '@taquito/taquito'
import { RPCURL } from '../config/constants'

export type TezosState = {
  tezos: TezosToolkit;
};

const initialState: TezosState = {
	tezos: new TezosToolkit(RPCURL)
}

export const tezosSlice = createSlice({
	name: 'tezos',
	initialState,
	reducers: {
		disconnect: (state) => {
			state.tezos = new TezosToolkit(RPCURL)
		}
	}
})

export const { disconnect } = tezosSlice.actions

export default tezosSlice.reducer
