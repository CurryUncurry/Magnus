import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function LightIcon (
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
			<circle
				cx="10"
				cy="10"
				r="4.3"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1.4"
			/>
			<circle cx="10" cy="2" r="1" fill="#949494" />
			<circle cx="2" cy="10" r="1" fill="#949494" />
			<circle cx="10" cy="18" r="1" fill="#949494" />
			<circle cx="18" cy="10" r="1" fill="#949494" />
			<circle cx="16" cy="5" r="1" fill="#949494" />
			<circle cx="16" cy="15" r="1" fill="#949494" />
			<circle cx="4" cy="5" r="1" fill="#949494" />
			<circle cx="4" cy="15" r="1" fill="#949494" />
		</chakra.svg>
	)
}

export default chakraSvg(LightIcon)
