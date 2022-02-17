import { BoxProps, Box, Flex, Table, Tbody, Td, Th, Thead, Tr, Button } from '@chakra-ui/react'
import PageFormWrap from '@components/PageFormWrap'
import { bondsTable } from '@utils/datamocks'
import { DateTime } from 'luxon'
import { useState } from 'react'

type IProps = {} & BoxProps;

const BondsBlock = ({ ...rest }: IProps) => (
	<PageFormWrap>
		<Flex {...dataBoxStyle} align="center" justify="space-between">
			<Box fontWeight="500" fontSize="lgText">Bond(1,1)</Box>
			<Box fontWeight="500">Purchase MGS at a discount</Box>
		</Flex>
		<Box {...dataBoxStyle} mt="12px">

			<Table variant='nodivider' size="sm">
				<Thead>
					<Tr>
						<Th></Th>
						<Th>BOND</Th>
						<Th isNumeric>PRICE</Th>
						<Th isNumeric>ROI</Th>
						<Th>DURATION</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						{bondsTable.map(({ icon, bond, price, roi, duration }) => (
							<>
								<Td>{icon}</Td>
								<Td>{bond}</Td>
								<Td isNumeric>{price}</Td>
								<Td>{roi}</Td>
								<Td>{duration}</Td>
								<Td><Button variant="outline" fontSize="1rem" padding="8px"> Bond </Button></Td>
							</>
						))}
					</Tr>
				</Tbody>
			</Table>

		</Box>
	</PageFormWrap>
)

const dataBoxStyle = {
	bg: 'black-secondary',
	padding: '16px 24px',
	borderRadius: '8px'
} as BoxProps

export default BondsBlock
