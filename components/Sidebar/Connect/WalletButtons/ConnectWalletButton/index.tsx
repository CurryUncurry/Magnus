import React, { FunctionComponent, ReactNode } from "react";
import { Box, BoxProps, IconProps, useToken } from "@chakra-ui/react";
import { useState } from "react";
import PlusIcon from "../../../../Icons/PlusIcon";

interface IProps {
    children: ReactNode;
    onClick: () => void;
}

const ConnectWalletButton: FunctionComponent<IProps> = ({ children, ...rest }) => {
    const [buttonHovered, setButtonHovered] = useState(false)
    const white = useToken('colors', 'white')
    const orange = useToken('colors', 'orange')
    const grey = useToken('colors', 'grey')

    return(
        <Box
            as="button"
            {...rest}
            {...buttonStyle}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
        >
            <span>{children}</span>
            <PlusIcon
                bgColor={buttonHovered ? orange : grey}
                color={white}
                {...iconStyle}
            />
        </Box>
    )
}

const buttonStyle = {
    padding: '11px 28px',
    display: 'flex',
    fontSize: '1rem',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'none',
    width:'100%'
} as BoxProps

const iconStyle = {
    w: '20px',
    h: '20px'
} as IconProps

export default ConnectWalletButton;
