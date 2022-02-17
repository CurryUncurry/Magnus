import { BoxProps, Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type IProps = {
    children: ReactNode
} & BoxProps

const PageFormWrap = ({ children, ...rest }: IProps) => (
	<Flex {...pageFormWrapStyle} >
		<Box {...innerBoxStyle} {...rest}>
			{children}
		</Box>
	</Flex>
)

const pageFormWrapStyle = {
	margin: '-30px',
	justifyContent: 'center'
} as BoxProps

const innerBoxStyle = {
	minHeight: '40px',
	minWidth: '40%',
	bg: 'black',
	borderRadius: '8px',
	padding: '10px'
}

export default PageFormWrap
