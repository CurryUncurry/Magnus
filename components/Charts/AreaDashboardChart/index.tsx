import { useToken } from '@chakra-ui/react'
import ActiveDotIcon from '@components/Icons/chart/ActiveDotIcon'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'
import CustomTooltip from '../CustomTooltip'

interface IProps {
    data: { [key: string]: any }[];
    stacked?: boolean;
	yAxisLabel?: string;
}

const AreaDashboardChart = ({ data, yAxisLabel = 'm', stacked = false }: IProps) => {
	const gray = useToken('colors', 'gray94')
	const line = useToken('colors', 'line')
	const white = useToken('colors', 'white')
	const orange = useToken('colors', 'orange')
	const red = useToken('colors', 'red')
	const green = useToken('colors', 'green')

	const areaColors = [orange, red, green]

	const getAreas = () =>
		Object.keys(data[0]).map((key, i) => {
			if (key !== 'name') {
				return (<Area
					dataKey={key}
					stroke={areaColors[i % areaColors.length + 1]}
					fill={areaColors[i % areaColors.length + 1]}
					fillOpacity="0.2"
					dot={{ fill: white, fillOpacity: '100%' }}
					activeDot={<ActiveDotIcon />} />)
			}
			return null
		})

	return (
		<ResponsiveContainer width="100%" height={274}>
			<AreaChart data={data} margin={{ left: -15, bottom: 0, right: 10 }}>
				<defs>
					<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#B93FF0" />
						<stop offset="90%" stopColor="#FD7B3B" />
					</linearGradient>
				</defs>
				<XAxis
					dataKey="name"
					stroke={white}
					axisLine={false}
					tickLine={false}
				/>
				<YAxis
					stroke={white}
					axisLine={false}
					tickLine={false}
					unit={yAxisLabel}
				/>
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
				{
					stacked ? (
						getAreas()
					) : (
						<Area
							dataKey="value"
							stroke="url(#gradient)"
							fill="url(#gradient)"
							fillOpacity="0.2"
							dot={{ fill: white, fillOpacity: '100%' }}
							activeDot={<ActiveDotIcon />}
						/>
					)
				}

			</AreaChart>
		</ResponsiveContainer>
	)
}

export default AreaDashboardChart
