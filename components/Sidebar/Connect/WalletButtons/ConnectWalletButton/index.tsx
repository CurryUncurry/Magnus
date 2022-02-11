import React, { FunctionComponent, ReactNode } from "react";
import PlusIcon from '../../../../../public/icons/connect/plus.svg';
import { Box } from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    onClick: () => void;
}

const ConnectWalletButton: FunctionComponent<IProps> = ({ children, ...rest }) => (
    <Box as="button" {...rest} {...buttonStyle}>
        <span>{children}</span><PlusIcon />
    </Box>
  );

const buttonStyle = {
    padding: '11px 28px',
    display: 'flex',
    fontSize: '1rem',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'none',
    width:'100%'
}

export default ConnectWalletButton;
