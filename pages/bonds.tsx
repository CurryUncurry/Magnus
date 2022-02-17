import BondsBlock from '@components/BondsBlock'
import DataBoard from '@components/DataBoard'
import ValueCard from '@components/ValueCard'
import { bondsPage } from '@utils/datamocks'

const Bonds = () => {
	return (
		<>
			<DataBoard>
				{bondsPage.map(({ title, value, delimiter }) => (
					<ValueCard
						title={title}
						value={value}
						delimiter={delimiter}
					/>
				))}
			</DataBoard>
			<BondsBlock />
		</>
	)
}

export default Bonds
