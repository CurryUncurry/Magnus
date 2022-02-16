import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { FC } from 'react'

type IProps = {
  label: string;
  value: string;
} & BoxProps;

const StakeData: FC<IProps> = ({ label, value, ...rest }) => (
	<Flex {...stakeDataStyle} {...rest}>
		<Box>{label}</Box>
		<Box fontWeight="600" fontSize="lgText">
			{value}
		</Box>
	</Flex>
)

const stakeDataStyle = {
	justify: 'space-between',
	align: 'center',
	m: '20px 0'
}

export default StakeData
