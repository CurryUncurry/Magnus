import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { getTimeToEnd } from '@helpers/index'
import { DateTime } from 'luxon'
import { FC, useEffect, useState } from 'react'

export type IProps = {
  endTime: any;
} & BoxProps;

const TimeRebase: FC<IProps> = ({ endTime, ...rest }) => {
	const [timeToRebase, setTimeToRebase] = useState(getTimeToEnd(endTime))

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeToRebase(getTimeToEnd(DateTime.local().endOf('day')))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Flex justify="space-between" align="center" {...rest}>
			<Box fontWeight="500" fontSize="lgText">Time staking (3,3)</Box>
			<Flex fontWeight="500" align="center">
				<Flex {...timeStyle}>{timeToRebase}</Flex>
        to next rebase
			</Flex>
		</Flex>
	)
}

const timeStyle = {
	padding: '2px',
	minWidth: '80px',
	borderRadius: '4px',
	justify: 'center',
	align: 'center',
	mr: '1',
	background: 'line'
} as BoxProps

export default TimeRebase
