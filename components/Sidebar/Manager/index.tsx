import { Box } from "@chakra-ui/react";
import SidebarLabel from "../SidebarLabel";
import ManagerButton from "./ManagerButton";
import PlusIcon from "../../../public/icons/manager/dashboard.svg";

const Manager = () => (
    <>
        <SidebarLabel>MANAGER</SidebarLabel>
        <ManagerButton icon={<PlusIcon />} label="Dashboard"/>
    </>
  );
export default Manager;
