import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function TimeIcon (
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
			<path d="M5.5 5L14.5 5L11 11H9L5.5 5Z" fill="#949494" />
			<path
				d="M3 2H4.4M17 2H15.6M3 18H4.4M17 18H15.6M4.4 2H15.6M4.4 2C4.4 4.66667 5.45 6 6.5 7C6.73738 7.22607 6.97475 7.43511 7.2 7.63867C7.57624 7.97868 7.91863 8.3034 8.17063 8.66667C8.43509 9.0479 8.6 9.4716 8.6 10C8.6 12.4232 5.1318 12.6444 4.49861 16.6667C4.435 17.0707 4.4 17.5131 4.4 18M4.4 18H15.6M15.6 2C15.6 4.66667 14.55 6 13.5 7C13.2626 7.22607 13.0252 7.43511 12.8 7.63867C12.4238 7.97868 12.0814 8.3034 11.8294 8.66667C11.5649 9.0479 11.4 9.4716 11.4 10C11.4 12.4232 14.8682 12.6444 15.5014 16.6667C15.565 17.0707 15.6 17.5131 15.6 18"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(TimeIcon)
