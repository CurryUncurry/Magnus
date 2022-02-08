import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { disconnect as walletDisconnect } from "../../app/walletSlice";
import { disconnect as tezosDisconnect } from "../../app/tezosSlice";
import { Button } from "@chakra-ui/react";

const DisconnectButton = () => {
  const wallet = useAppSelector((state) => state.wallet.wallet);
  const dispatch = useAppDispatch();

  const disconnectWallet = async (): Promise<void> => {
    // if (wallet) {
    //   await wallet.client.removeAllAccounts();
    //   await wallet.client.removeAllPeers();
    //   await wallet.client.destroy();
    // }
    dispatch(walletDisconnect());
    dispatch(tezosDisconnect())
  };

  return (
    <Button onClick={disconnectWallet}>
      <i className="fas fa-times"></i>&nbsp; Disconnect wallet
    </Button>
  );
};

export default DisconnectButton;
