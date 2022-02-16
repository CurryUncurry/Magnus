import DataBoard from '@components/DataBoard'
import StakingForm from '@components/StakingForm'
import ValueCard from '@components/ValueCard'
import { stakePage } from '@utils/datamocks'

const Staking = () => {
	return (
		<>
			<DataBoard>
				{stakePage.map(({ title, value, delimiter }) => (
					<ValueCard
						title={title}
						value={value}
						delimiter={delimiter}
					/>
				))}
			</DataBoard>
			<StakingForm />
		</>
	)
}

export default Staking
