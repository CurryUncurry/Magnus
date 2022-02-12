import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function DropdownArrow (
	props: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>
) {
	return (
		<chakra.svg width="8" height="6" viewBox="0 0 8 6" fill="none" {...props}>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.86496 9.33255e-08C7.7128 5.62654e-08 8.17595 0.988856 7.63318 1.64018L4.76822 5.07813C4.36843 5.55789 3.63157 5.55789 3.23178 5.07814L0.36682 1.64018C-0.175952 0.988858 0.287204 3.80848e-07 1.13504 3.43788e-07L6.86496 9.33255e-08Z"
				fill="url(#paint0_linear_133_339)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_133_339"
					x1="-0.989126"
					y1="5.81059"
					x2="6.99696"
					y2="-2.0381"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#B93FF0" />
					<stop offset="1" stop-color="#FD7B3B" />
				</linearGradient>
			</defs>
		</chakra.svg>
	)
}

export default chakraSvg(DropdownArrow)
