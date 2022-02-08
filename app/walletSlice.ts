import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
import { BeaconWallet } from '@taquito/beacon-wallet';
  
  export type WalletState = {
    wallet: BeaconWallet | null;
    beaconConnection: boolean;
    userAddress?: string;
    publicToken?: string;
  };
  
  const initialState: WalletState = {
    wallet: null,
    beaconConnection: false
  };
  
  export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
    setWallet: (state, action: PayloadAction<BeaconWallet>) => {
      state.wallet = action.payload;
    },
    setPublicToken: (state, action: PayloadAction<string>) => {
      state.publicToken = action.payload
    },
    connect: (state, action: PayloadAction<string>) => {
      state.userAddress = action.payload;
      state.beaconConnection = true;
    },
    disconnect: (state) => {
      state.userAddress = undefined;
      state.beaconConnection = false;
      state.wallet = null;
    }
    },
  });
  
  export const {
    setWallet, 
    setPublicToken,
    connect,
    disconnect,
  } = walletSlice.actions;
  
  export default walletSlice.reducer;