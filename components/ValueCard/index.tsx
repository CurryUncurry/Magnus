import {
	Box,
	BoxProps,
	Flex,
	Heading,
	HeadingProps,
	Text,
	TextProps,
	useColorModeValue
} from '@chakra-ui/react'
import { DuarionValues } from '@utils/enums'
import { ChangePercentage } from '@utils/types'
import { FC } from 'react'
import { FormattedNumber } from 'react-intl'
import ChangeBadge from './ChangeBadge'

export type ValueCardProps = {
    title: string,
    value: number,
    delimiter: string,
    changePercentage?: ChangePercentage,
    duration?: DuarionValues,
	withBadge?: boolean,
} & BoxProps

const ValueCard: FC<ValueCardProps> = ({ title, value, delimiter, changePercentage, duration, withBadge, ...rest }) => {
	const color = useColorModeValue('black', 'white')
	return (
		<Box {...rest}>
			<Text color={color} {...textStyle}>{title}</Text>
			<Flex align='center'>
				<Heading color={color} {...h4Style}>
					<FormattedNumber value={value}/>&nbsp;{delimiter}
				</Heading>
				{withBadge ? <ChangeBadge
					value={changePercentage!.value}
					direction={changePercentage!.direction}
					ml='12px'
				/> : null}

			</Flex>
		</Box>
	)
}

const textStyle = {
	fontSize: 'text',
	mb: '8px'
} as TextProps

const h4Style = {
	as: 'h4',
	fontWeight: 600,
	fontSize: '24px'
} as HeadingProps

export default ValueCard
