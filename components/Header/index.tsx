import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import ConnectLedger from "../ConnectLedger";
import ConnectWallet from "../ConnectWallet";
import DisconnectWallet from "../DisconnectWallet";

const Header = () => {
  const isConnected = useAppSelector((state) => state.wallet.beaconConnection);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <button>Magnus DAO</button>
        {!isConnected ? (
          <div>
            <ConnectWallet /> <ConnectLedger />
          </div>
        ) : (
          <DisconnectWallet />
        )}
      </Box>
    </Box>
  );
};

export default Header;
