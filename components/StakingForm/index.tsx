import { BoxProps, Box } from '@chakra-ui/react'
import PageFormWrap from '@components/PageFormWrap'
import { DateTime } from 'luxon'
import { useState } from 'react'
import StakeData from './StakeData'
import StakeInput from './StakeInput'
import StakeMode from './StakeMode'
import TimeRebase from './TimeRebase'

type IProps = {} & BoxProps;

const StakingForm = ({ ...rest }: IProps) => {
	const [mode, setMode] = useState<'stake' | 'unstake'>('stake')

	return (
		<PageFormWrap>
			<TimeRebase endTime={DateTime.local().endOf('day')} {...dataBoxStyle} />
			<Box {...dataBoxStyle} mt="12px">
				<StakeMode
					mode={mode}
					onStake={() => setMode('stake')}
					onUnstake={() => setMode('unstake')}
					mb="12px"
				/>

				<StakeInput onConfirm={() => () => {}} max="100" />
				<StakeData label="Balance" value="1337 MGS" />
				<StakeData label="Staked balance" value="1000 MGS" />
				<StakeData label="Next reward" value="100 MGS" />
				<StakeData label="Next yiels" value="0.488%" />
			</Box>
		</PageFormWrap>
	)
}
const dataBoxStyle = {
	bg: 'black-secondary',
	padding: '16px 24px',
	borderRadius: '8px'
} as BoxProps

export default StakingForm
