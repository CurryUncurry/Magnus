import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function DashboardIcon (props: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>) {
	return (
		<chakra.svg
			width='1em'
			height='1em'
			viewBox='0 0 20 20'
			fill='none'
			{...props}
		>
			<path
				d="M15 11.5C16.1046 11.5 17.0233 12.4075 16.7658 13.4816C16.5327 14.4538 16.1287 15.3824 15.5675 16.2223C14.6335 17.6202 13.306 18.7096 11.7528 19.353C10.1996 19.9963 8.49057 20.1646 6.84173 19.8367C5.19289 19.5087 3.67834 18.6992 2.48959 17.5104C1.30085 16.3217 0.491299 14.8071 0.163325 13.1583C-0.164649 11.5094 0.00367911 9.80036 0.647024 8.24719C1.29037 6.69402 2.37984 5.3665 3.77765 4.43251C4.61759 3.87128 5.54619 3.46729 6.51837 3.23422C7.5925 2.9767 8.5 3.89543 8.5 5V9.5C8.5 10.6046 9.39543 11.5 10.5 11.5H15Z"
				fill="currentColor"
			/>
			<path
				d="M10.5 2C10.5 0.89543 11.4051 -0.0210756 12.4853 0.209752C13.0485 0.330101 13.6009 0.501699 14.1355 0.723145C15.2881 1.20056 16.3354 1.90033 17.2175 2.78249C18.0997 3.66464 18.7994 4.71192 19.2769 5.86451C19.4983 6.39913 19.6699 6.95155 19.7902 7.51473C20.0211 8.59491 19.1046 9.5 18 9.5L12.5 9.5C11.3954 9.5 10.5 8.60457 10.5 7.5V2Z"
				fill="#949494"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(DashboardIcon)
