import { Box, BoxProps, Flex, FlexProps, Grid, GridProps } from '@chakra-ui/react'
import { MarketValueGraph, MAGStakedGraph, ProtocolOwnedLiquidityGraph, RiskFreeValueGraph, RunwayAvailableGraph, TotalValueDepositedGraph } from '@components/Graph'
import ValueCard, { ValueCardProps } from '@components/ValueCard'
import { valueCards } from '@utils/datamocks'
import { FC } from 'react'

const Dashboard: FC = () => {
	return (
		<Box {...wrapperStyle}>
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
							/>
						)
					)
				}
			</Flex>

			<Grid {...chartsWrapperStyle}>
				<Box {...chartBoxStyle}>
					<TotalValueDepositedGraph />
				</Box>

				<Box {...chartBoxStyle}>
					<MarketValueGraph />
				</Box>

				<Box {...chartBoxStyle}>
					<RiskFreeValueGraph />
				</Box>

				<Box {...chartBoxStyle}>
					<ProtocolOwnedLiquidityGraph />
				</Box>

				<Box {...chartBoxStyle}>
					<MAGStakedGraph />
				</Box>

				<Box {...chartBoxStyle}>
					<RunwayAvailableGraph />
				</Box>
			</Grid>
		</Box>
	)
}

const wrapperStyle = {
	p: '28px 32px',
	maxW: '1200px',
	w: '100%'
} as BoxProps

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

export default Dashboard
