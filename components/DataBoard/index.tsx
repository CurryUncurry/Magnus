import { BoxProps, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type IProps = {
    children: ReactNode
} & BoxProps

const DataBoard = ({ children, ...rest }: IProps) => (
	<Flex {...dataBoardStyle} {...rest}>
		{children}
	</Flex>
)

const dataBoardStyle = {
	bgImage: `url(${require('../../public/icons/DataBoard.svg')})`,
	justifyContent: 'space-around',
	padding: '90px 100px 0px',
	backgroundSize: 'cover',
	borderRadius: '8px',
	width: '100%',
	height: '300px'
} as BoxProps

export default DataBoard
