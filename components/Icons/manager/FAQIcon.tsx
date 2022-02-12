import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function FAQIcon (
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
				d="M18.0331 10.0191C17.2428 13.6515 13.3974 16.4077 8.77273 16.4077C8.10561 16.4077 7.45471 16.3504 6.82686 16.2413C8.10125 17.3467 9.96686 18.0441 12.0455 18.0441C13.189 18.0441 14.268 17.833 15.2197 17.4591C15.6547 17.2881 17.0453 17.7284 18.0127 18.0768C18.4099 18.2199 18.8208 17.8444 18.7151 17.4357C18.4754 16.5085 18.2016 15.2319 18.4049 14.8816C18.7875 14.2227 19 13.4933 19 12.7259C19 11.7374 18.6474 10.812 18.0331 10.0191Z"
				fill="#949494"
			/>
			<path
				d="M17 8.29032C17 11.7644 13.4183 14.5806 9 14.5806C7.79665 14.5806 6.65536 14.3717 5.63158 13.9975C5.1119 13.8076 3.21847 14.3192 2.0194 14.6795C1.61306 14.8016 1.22686 14.3965 1.36162 13.9941C1.69895 12.987 2.11262 11.5275 1.84211 11.1026C1.30324 10.2563 1 9.30117 1 8.29032C1 4.81627 4.58172 2 9 2C13.4183 2 17 4.81627 17 8.29032Z"
				fill="currentColor"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(FAQIcon)
