import { useToken } from '@chakra-ui/react'
import ActiveDotIcon from '@components/Icons/chart/ActiveDotIcon'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'
import CustomTooltip from '../CustomTooltip'
import { data } from '../../../utils/data'

const LineDashboardChart = () => {
	const gray = useToken('colors', 'gray94')
	const line = useToken('colors', 'line')
	const white = useToken('colors', 'white')

	return (
		<ResponsiveContainer width="100%" height={274}>
			<LineChart
				data={data}
				margin={{ left: -20, bottom: 0, right: 10 }}
			>
				<defs>
					<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#B93FF0" />
						<stop offset="90%" stopColor="#FD7B3B" />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" stroke={white} axisLine={false} tickLine={false} />
				<YAxis dataKey="value" stroke={white} axisLine={false} tickLine={false} unit="m" />
				<CartesianGrid strokeDasharray="0" stroke={line} horizontal={false} />
				<Tooltip
					content={<CustomTooltip />}
					payload={data}
					cursor={{
						stroke: gray,
						strokeWidth: 1,
						strokeLinecap: 'round',
						strokeDasharray: '4 4'
					}}
				/>
				<Line type="monotone" dataKey="value" stroke="url(#gradient)" activeDot={<ActiveDotIcon />} />
			</LineChart>
		</ResponsiveContainer>
	)
}

export default LineDashboardChart
