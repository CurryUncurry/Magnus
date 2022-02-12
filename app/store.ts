import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import tezosReducer from './tezosSlice'
import walletReducer from './walletSlice'
import sidebarReducer from '../components/Sidebar/sidebarSlice'

export const store = configureStore({
	reducer: {
		tezos: tezosReducer,
		wallet: walletReducer,
		sidebar: sidebarReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['wallet/setWallet'],
				ignoredPaths: ['tezos.tezos', 'wallet.wallet']
			}
		})
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
