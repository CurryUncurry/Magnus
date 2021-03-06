import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '@hoc/chakraSvg'
import { SVGProps } from 'react'

function DataBoardIcon (props: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>) {
	return (
		<chakra.svg
			width="1144" height="295" viewBox="0 0 1144 295" fill="none"
			{...props}
		>
			<path d="M0 7.99999C0 3.58172 3.58172 0 8 0H1136C1140.42 0 1144 3.58172 1144 8V287C1144 291.418 1140.42 295 1136 295H832C827.582 295 824 291.418 824 287V260C824 255.582 820.418 252 816 252H328C323.582 252 320 255.582 320 260V287C320 291.418 316.418 295 312 295H7.99999C3.58171 295 0 291.418 0 287V7.99999Z" fill="#242529"/>
			<rect x="843" y="287" width="24" height="5" fill="url(#paint0_linear_278_1169)"/>
			<rect width="24" height="5" transform="matrix(-1 0 0 1 290 287)" fill="url(#paint1_linear_278_1169)"/>
			<path d="M131 0.5V56C131 60.4183 127.418 64 123 64H0" stroke="#393B43" stroke-width="2"/>
			<path d="M1013 294.5V239C1013 234.582 1016.58 231 1021 231H1144" stroke="#393B43" stroke-width="2"/>
			<path d="M2 122H53.5C57.9183 122 61.5 125.582 61.5 130V293.5" stroke="#393B43" stroke-width="2"/>
			<path d="M1142 173H1090.5C1086.08 173 1082.5 169.418 1082.5 165V1.5" stroke="#393B43" stroke-width="2"/>
			<path d="M97 294.5V212.5C97 208.082 100.582 204.5 105 204.5H220C224.418 204.5 228 208.082 228 212.5V294.5" stroke="#393B43" stroke-width="2"/>
			<path d="M1047 0.5V82.5C1047 86.9183 1043.42 90.5 1039 90.5H970C965.582 90.5 962 86.9183 962 82.5V0.5" stroke="#393B43" stroke-width="2"/>
			<defs>
				<linearGradient id="paint0_linear_278_1169" x1="843" y1="290" x2="865.5" y2="290" gradientUnits="userSpaceOnUse">
					<stop stop-color="#242529" stop-opacity="0"/>
					<stop offset="0.716183" stop-color="#242529"/>
				</linearGradient>
				<linearGradient id="paint1_linear_278_1169" x1="-1.28746e-07" y1="3" x2="22.5" y2="3" gradientUnits="userSpaceOnUse">
					<stop stop-color="#242529" stop-opacity="0"/>
					<stop offset="0.716183" stop-color="#242529"/>
				</linearGradient>
			</defs>
		</chakra.svg>
	)
}

export default chakraSvg(DataBoardIcon)
