import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import tezosReducer from './tezosSlice';
import walletReducer from './walletSlice';

export const store = configureStore({
  reducer: {
    tezos: tezosReducer,
    wallet: walletReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
