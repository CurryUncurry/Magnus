import {
	BoxProps,
	Flex
} from '@chakra-ui/react'
import { FC } from 'react'
import StakeButton from './StakeButton'

type IProps = {
  onStake: () => void;
  onUnstake: () => void;
  mode: 'stake' | 'unstake';
} & BoxProps;

const StakeMode: FC<IProps> = ({ mode, onStake, onUnstake, ...rest }) => (
	<Flex justify="center" align="center" {...rest}>
		<StakeButton onClick={onStake} isActive={mode === 'stake'}>
      Stake
		</StakeButton>
		<StakeButton
			onClick={onUnstake}
			isActive={mode === 'unstake'}
			marginLeft="32px"
		>
      Unstake
		</StakeButton>
	</Flex>
)

export default StakeMode
