import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function BoostIcon (
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
				d="M7.95931 15.9026C7.69586 16.8905 8.90966 17.5903 9.63266 16.8673L14.6375 11.8625C15.0837 11.4163 15.0101 10.6734 14.4851 10.3234L11.5961 8.39743C11.2397 8.15982 11.0742 7.7216 11.1846 7.30772L12.0407 4.09742C12.3041 3.10948 11.0903 2.40966 10.3673 3.13266L5.36253 8.13747C4.91631 8.58369 4.98988 9.32658 5.51494 9.67663L8.40386 11.6026C8.76027 11.8402 8.92576 12.2784 8.81539 12.6923L7.95931 15.9026Z"
				fill="currentColor"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(BoostIcon)
