import { useAppSelector } from "../../../app/hooks";
import SidebarLabel from "../SidebarLabel";
import ConnectLedger from "./WalletButtons/ConnectLedger";
import ConnectWallet from "./WalletButtons/ConnectWallet";
import DisconnectWallet from "./WalletButtons/DisconnectWallet";

const Connect = () => {
    const isConnected = useAppSelector((state) => state.wallet.beaconConnection);
  return (
    <>
      <SidebarLabel>CONNECT</SidebarLabel>
      {!isConnected ? (
          <div>
            <ConnectWallet /> <ConnectLedger />
          </div>
        ) : (
          <DisconnectWallet />
        )}
    </>
  );
};
export default Connect;
