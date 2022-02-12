import SidebarLabel from '../SidebarLabel'
import ManagerButton from './ManagerButton'
import DashboardIcon from '../../Icons/manager/DashboardIcon'
import { iconStyles } from '../../../theme/foundations'
import StakingIcon from '../../Icons/manager/StakingIcon'
import FAQIcon from '../../Icons/manager/FAQIcon'
import BondsIcon from '../../Icons/manager/BondsIcon'
import DocumentsIcon from '../../Icons/manager/DocumentsIcon'
import { useRouter } from 'next/router'

const managerButtons = [
	{
		label: 'Dashboard',
		icon: (color: string) => (
			<DashboardIcon {...iconStyles.defaultIcon} color={color} />
		)
	},
	{
		icon: (color: string) => (
			<StakingIcon {...iconStyles.defaultIcon} color={color} />
		),
		label: 'Staking'
	},
	{
		icon: (color: string) => (
			<BondsIcon {...iconStyles.defaultIcon} color={color} />
		),
		label: 'Bonds'
	},
	{
		icon: (color: string) => (
			<DocumentsIcon {...iconStyles.defaultIcon} color={color} />
		),
		label: 'Documentation'
	},
	{
		icon: (color: string) => (
			<FAQIcon {...iconStyles.defaultIcon} color={color} />
		),
		label: 'FAQ'
	}
]

const Manager = () => {
	const router = useRouter()
	return (
		<>
			<SidebarLabel>MANAGER</SidebarLabel>
			{managerButtons.map((button) => (
				<ManagerButton
					{...button}
					isActive={router.pathname === `/${button.label.toLowerCase()}`}
				/>
			))}
		</>
	)
}
export default Manager
