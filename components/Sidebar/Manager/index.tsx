import SidebarLabel from '../SidebarLabel'
import ManagerButton from './ManagerButton'
import DashboardIcon from '../../Icons/manager/DashboardIcon'

const Manager = () => (
	<>
		<SidebarLabel>MANAGER</SidebarLabel>
		<ManagerButton icon={<DashboardIcon color='white' />} label="Dashboard"/>
	</>
)
export default Manager
