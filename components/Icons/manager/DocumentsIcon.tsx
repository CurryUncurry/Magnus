import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function DocumentsIcon (
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
				d="M1 5.76556C1 4.75692 1.75107 3.90612 2.75193 3.78101L6.75193 3.28101C7.94564 3.1318 9 4.06257 9 5.26556V6C9 8.20914 7.20914 10 5 10H1V5.76556Z"
				fill="#949494"
			/>
			<rect x="1" y="6" width="18" height="13" rx="4" fill="currentColor" />
			<rect x="4" y="14" width="12" height="2" rx="1" fill="#949494" />
		</chakra.svg>
	)
}

export default chakraSvg(DocumentsIcon)
