import { ChakraProps, useToken } from '@chakra-ui/react'
import { FC } from 'react'

function chakraSvg (Component: FC<any>) {
	function ChakraSvg ({ color, ...props }: { color?: string } & ChakraProps) {
		color = useToken('colors', color || '') || color

		return <Component color={color} {...props} />
	}

	ChakraSvg.displayName = `ChakraSvg(${getDisplayName(Component)})`

	return ChakraSvg
}

function getDisplayName (Component: FC) {
	return Component.displayName || Component.name || 'Component'
}

export default chakraSvg
