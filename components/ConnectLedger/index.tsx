import React, { useState } from "react";
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import { HDPathTemplate, LedgerSigner } from "@taquito/ledger-signer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { connect } from "../../app/walletSlice";
import { Button } from "@chakra-ui/react";

const ConnectLedger = () => {
  const [loadingNano, setLoadingNano] = useState<boolean>(false);
  
  const Tezos = useAppSelector((state) => state.tezos.tezos);
  const dispatch = useAppDispatch();
  
  const connectNano = async (): Promise<void> => {
    try {
      setLoadingNano(true);
      const transport = await TransportU2F.create();
      const ledgerSigner = new LedgerSigner(transport, HDPathTemplate(1), true);

      Tezos.setSignerProvider(ledgerSigner);

      //Get the public key and the public key hash from the Ledger
      const userAddress = await Tezos.signer.publicKeyHash();
      dispatch(connect(userAddress));
    } catch (error) {
      setLoadingNano(false);
    }
  };

  return (
    <Button disabled={loadingNano} onClick={connectNano}>
      {loadingNano ? (
        <span>
          <i className="fas fa-spinner fa-spin"></i>&nbsp; Loading, please wait
        </span>
      ) : (
        <span>
          <i className="fab fa-usb"></i>&nbsp; Connect with Ledger Nano
        </span>
      )}
    </Button>
  );
};

export default ConnectLedger;
