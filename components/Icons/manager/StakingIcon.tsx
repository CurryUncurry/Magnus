import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function StakingIcon (
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
				d="M19 8.36364C19 7.25907 18.1046 6.36364 17 6.36364H3.65909C3.32019 6.36364 3.04545 6.0889 3.04545 5.75C3.04545 5.4111 3.32019 5.13636 3.65909 5.13636H15.7273C15.7273 4.23262 14.9946 3.5 14.0909 3.5H3C1.89543 3.5 1 4.39543 1 5.5V15.8182C1 16.9227 1.89543 17.8182 3 17.8182H17C18.1046 17.8182 19 16.9228 19 15.8182V14.5455H15.7273C14.3717 14.5455 13.2728 13.4465 13.2728 12.0909C13.2728 10.7353 14.3717 9.63637 15.7273 9.63637H19V8.36364Z"
				fill="currentColor"
			/>
			<path
				d="M14.5 12.0909C14.5 11.4131 15.0495 10.8636 15.7273 10.8636H19V13.3182H15.7273C15.0495 13.3182 14.5 12.7687 14.5 12.0909Z"
				fill="#949494"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(StakingIcon)
