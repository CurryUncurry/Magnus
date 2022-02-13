import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react'
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

export default Dashboard
