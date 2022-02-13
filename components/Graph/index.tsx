import Chart from '@components/Chart'
import { formatCurrency, trim } from '@helpers/index'
import graphData from '@utils/graphdata.json'

import { bulletpoints, itemType, tooltipInfoMessages, tooltipItems } from './treasuryData'

export const Graph = ({ children }: any) => <>{children}</>

export const TotalValueDepositedGraph = () => {
	const data = graphData

	return (
	// @ts-ignore
		<Chart
			type="area"
			data={data}
			itemType={itemType.dollar}
			itemNames={tooltipItems.tvl}
			dataKey={['totalValueLocked']}
			headerText={`Total Value Deposited`}
			stopColor={[['#768299', '#98B3E9']]}
			bulletpointColors={bulletpoints.tvl}
			infoTooltipMessage={tooltipInfoMessages().tvl}
			expandedGraphStrokeColor='#ffffff'
			headerSubText={`${data && formatCurrency(data[0].totalValueLocked)}`}
		/>
	)
}

export const MarketValueGraph = () => {
	const data = graphData

	return (
	// @ts-ignore
		<Chart
			type="stack"
			data={data}
			dataKey={[
				'treasuryDaiMarketValue',
				'treasuryFraxMarketValue',
				'treasuryWETHMarketValue',
				'treasuryLusdMarketValue',
				'treasuryWBTCMarketValue',
				'treasuryUstMarketValue',
				'treasuryOtherMarketValue'
			]}
			stopColor={[
				['#F5AC37', '#F5AC37'],
				['#768299', '#768299'],
				['#DC30EB', '#DC30EB'],
				['#8BFF4D', '#8BFF4D'],
				['#ff758f', '#ff758f'],
				['#4E1F71', '#4E1F71'],
				['#8AECCD', '#8AECCD']
			]}
			headerText={`Market Value of Treasury Assets`}
			headerSubText={`${data && formatCurrency(data[0].treasuryMarketValue)}`}
			bulletpointColors={bulletpoints.coin}
			itemNames={tooltipItems.coin}
			itemType={itemType.dollar}
			infoTooltipMessage={tooltipInfoMessages().mvt}
			expandedGraphStrokeColor='#ffffff'
		/>
	)
}

export const RiskFreeValueGraph = () => {
	const data = graphData

	return (
		<Chart
			type="stack"
			data={data}
      // @ts-ignore
			format="currency"
			dataKey={[
				'treasuryDaiRiskFreeValue',
				'treasuryFraxRiskFreeValue',
				'treasuryLusdRiskFreeValue',
				'treasuryUstMarketValue'
			]}
			stopColor={[
				['#F5AC37', '#F5AC37'],
				['#768299', '#768299'],
				['#ff758f', '#ff758f'],
				['#4E1F71', '#4E1F71'],
				['#000', '#fff'],
				['#000', '#fff'],
				['#000', '#fff']
			]}
			headerText={`Risk Free Value of Treasury Assets`}
			headerSubText={`${data && formatCurrency(data[0].treasuryRiskFreeValue)}`}
			bulletpointColors={bulletpoints.rfv}
			itemNames={tooltipItems.rfv}
			itemType={itemType.dollar}
			infoTooltipMessage={tooltipInfoMessages().rfv}
			expandedGraphStrokeColor='#ffffff'
		/>
	)
}

export const ProtocolOwnedLiquidityGraph = () => {
	const data = graphData

	return (
	// @ts-ignore
		<Chart
			isPOL
			type="area"
			data={data}
			dataFormat="percent"
			itemNames={tooltipItems.pol}
			itemType={itemType.percentage}
			dataKey={['treasuryOhmDaiPOL']}
			bulletpointColors={bulletpoints.pol}
			infoTooltipMessage={tooltipInfoMessages().pol}
			headerText={`Protocol Owned Liquidity MAG-DAI`}
			expandedGraphStrokeColor='#ffffff'
			headerSubText={`${data && trim(data[0].treasuryOhmDaiPOL, 2)}% `}
			stopColor={[['rgba(128, 204, 131, 1)', 'rgba(128, 204, 131, 0)']]}
		/>
	)
}

export const MAGStakedGraph = () => {
	const data = graphData

	const staked =
	data &&
	data
		.map(metric => ({
			staked: (metric.sOhmCirculatingSupply / metric.ohmCirculatingSupply) * 100,
			timestamp: metric.timestamp
		}))
		.filter(metric => metric.staked < 100)

	return (
	// @ts-ignore
		<Chart
			isStaked
			type="area"
			data={staked}
			dataKey={['staked']}
			dataFormat="percent"
			headerText={`MAG Staked`}
			stopColor={[['#55EBC7', '#47ACEB']]}
			bulletpointColors={bulletpoints.staked}
			infoTooltipMessage={tooltipInfoMessages().staked}
			expandedGraphStrokeColor='#ffffff'
			headerSubText={`${staked && trim(staked[0].staked, 2)}% `}
		/>
	)
}

export const RunwayAvailableGraph = () => {
	const data = graphData

	const runway = data && data.filter(metric => metric.runway10k > 5)

	const [current, ...others] = bulletpoints.runway
	const runwayBulletpoints = [{ ...current, background: '#FFFFFF' }, ...others]
	const colors = runwayBulletpoints.map(b => b.background)

	return (
	// @ts-ignore
		<Chart
			type="multi"
			data={runway}
			dataKey={['runwayCurrent', 'runway7dot5k', 'runway5k', 'runway2dot5k']}
			color={'#FFFFFF'}
			stroke={colors}
			headerText={`Runway Available`}
			headerSubText={`${data && trim(data[0].runwayCurrent, 1)} Days`}
			dataFormat="days"
			bulletpointColors={runwayBulletpoints}
			itemNames={tooltipItems.runway}
			itemType={''}
			infoTooltipMessage={tooltipInfoMessages().runway}
			expandedGraphStrokeColor='#ffffff'
		/>
	)
}
