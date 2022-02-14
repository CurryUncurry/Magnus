import { Box, BoxProps } from '@chakra-ui/react'
import ActiveDotIcon from '@components/Icons/chart/ActiveDotIcon'

type IProps = {
    label?: any;
} & BoxProps

const CustomTooltip = ({ label, ...rest }: IProps) => {
	return (
		<Box {...tooltipStyle}>
			<span>{label}</span>
		</Box>
	)
}

const tooltipStyle = {
	background: 'black',
	borderRadius: '8px',
	padding: '8px'
}

export default CustomTooltip
