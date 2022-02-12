import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function LockIcon (
	props: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>
) {
	return (
		<chakra.svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			{...props}
		>
			<path
				d="M6.21057 5.6674C6.21057 3.57453 7.90718 1.87793 10 1.87793V1.87793C12.0929 1.87793 13.7895 3.57454 13.7895 5.6674V8.99998H6.21057V5.6674Z"
				stroke="#949494"
				stroke-width="1.8"
			/>
			<rect
				x="2"
				y="7.77267"
				width="16"
				height="10.9474"
				rx="3"
				fill="currentColor"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(LockIcon)
