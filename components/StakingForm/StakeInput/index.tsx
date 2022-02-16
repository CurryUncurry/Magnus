import {
	Box,
	BoxProps,
	Button,
	ButtonProps,
	Flex,
	Input
} from '@chakra-ui/react'
import { FC, useState } from 'react'

type IProps = {
  onConfirm: (data: string) => void;
  max: string;
} & BoxProps;

const StakeInput: FC<IProps> = ({ onConfirm, max, ...rest }) => {
	const [stakeData, setStakeData] = useState('')

	return (
		<Flex {...stakeInputStyle}>
			<Box position="relative" width="100%">
				<Input
					{...inputStyle}
					onChange={(e) => setStakeData(e.target.value)}
					value={stakeData}
				/>
				<Box as="button" onClick={() => setStakeData(max)} {...maxButtonStyle}>
          MAX
				</Box>
			</Box>
			<Button
				as="button"
				size="md"
				disabled={stakeData.length === 0}
				{...buttonStyle}
			>
        Approve
			</Button>
		</Flex>
	)
}

const stakeInputStyle = {
	borderTop: '1px',
	borderBottom: '1px',
	padding: '32px 0',
	borderColor: 'line',
	justify: 'space-between'
} as BoxProps

const inputStyle = {
	width: '100%',
	border: '1px',
	borderColor: 'gray58',
	bg: 'line',
	paddingRight: '60px'
} as BoxProps

const maxButtonStyle = {
	position: 'absolute',
	top: '20%',
	right: '16px',
	zIndex: '99',
	fontWeight: '500'
} as BoxProps

const buttonStyle = {
	marginLeft: '16px'
} as ButtonProps

export default StakeInput
