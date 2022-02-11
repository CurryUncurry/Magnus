import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

const SidebarLabel = ({ children }: IProps) => (
    <Box {...delimeterStyle}>{children}</Box>
)

const delimeterStyle = {
    fontSize: "12px",
    color: "#949494",
    fontWeight: "500",
    padding: "13.5px 28px",
  }

export default SidebarLabel;
