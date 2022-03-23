import { Box, BoxProps, Flex, FlexProps, Grid, GridProps } from '@chakra-ui/react'
import LineDashboardChart from '@components/Charts/LineDashboardChart'
import AreaDashboardChart from '@components/Charts/AreaDashboardChart'
import ValueCard, { ValueCardProps } from '@components/ValueCard'
import { valueCards } from '@utils/datamocks'
import { FC } from 'react'
import { data, mgsStackedData, stackedData } from '@utils/data'

const Dashboard: FC = () => {
	return (
		<>
			<Flex {...topFlexStyle}>
				{
					valueCards.map(
						({ title, value, delimiter, changePercentage, duration }: ValueCardProps, index) => (
							<ValueCard
								title={title}
								value={value}
								delimiter={delimiter}
								changePercentage={changePercentage}
								duration={duration}
								key={`valuecard-${index}`}
								withBadge
							/>
						)
					)
				}
			</Flex>

			<Grid {...chartsWrapperStyle}>
				<Box {...chartBoxStyle}>
					<Box {...chartLabelStyle}>Market Cap</Box>
					<LineDashboardChart />
				</Box>

				<Box {...chartBoxStyle}>
					<Box {...chartLabelStyle}>Total Value Deposited</Box>
					<LineDashboardChart />
				</Box>

				<Box {...chartBoxStyle}>
					<Box {...chartLabelStyle}>Market Value of Treasury Assets</Box>
					<AreaDashboardChart data={stackedData} stacked />
				</Box>

				<Box {...chartBoxStyle}>
					<Box {...chartLabelStyle}>MGS Stacked</Box>
					<AreaDashboardChart yAxisLabel='%' data={mgsStackedData} />
				</Box>
			</Grid>
		</>
	)
}

const topFlexStyle = {
	justify: 'space-between',
	align: 'center',
	w: '100%'
} as FlexProps

const chartsWrapperStyle = {
	templateColumns: 'repeat(2,1fr)',
	gap: '20px',
	mt: '32px'
} as GridProps

const chartBoxStyle = {
	bg: 'black-secondary',
	borderRadius: '8px',
	padding: '16px'
} as BoxProps

const chartLabelStyle = {
	fontWeight: 500,
	marginBottom: '16px'
} as BoxProps

export default Dashboard
