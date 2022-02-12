import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function BondsIcon (
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
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.9 4.50001C10.9 4.00296 10.4971 3.60001 10 3.60001C9.50294 3.60001 9.1 4.00296 9.1 4.50001V10C9.1 10.2387 9.19482 10.4676 9.3636 10.6364L12.3636 13.6364C12.7151 13.9879 13.2849 13.9879 13.6364 13.6364C13.9879 13.2849 13.9879 12.7151 13.6364 12.3636L10.9 9.62722V4.50001Z"
				fill="currentColor"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(BondsIcon)
