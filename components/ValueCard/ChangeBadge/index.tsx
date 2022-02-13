import { Badge, BadgeProps } from '@chakra-ui/react'
import { ChangeDirections } from '@utils/enums'
import { ChangePercentage } from '@utils/types'
import { FC } from 'react'

const ChangeBadge: FC<BadgeProps & ChangePercentage> = ({ value, direction, ...rest }) => {
	const bg = direction === ChangeDirections.UP ? 'green-secondary' : 'red-secondary'
	const color = direction === ChangeDirections.UP ? 'green' : 'red'

	return (
		<Badge bg={bg} color={color} {...badgeStyle} {...rest}>
			{value}&nbsp;🚀
		</Badge>
	)
}

const badgeStyle = {
	borderRadius: '16px',
	p: '3px 8px'
} as BadgeProps

export default ChangeBadge
