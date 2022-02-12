import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function SidebarArrowIcon (
	props: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>
) {
	return (
		<chakra.svg
			width="15"
			height="24"
			viewBox="0 0 15 24"
			fill="none"
			{...props}
		>
			<path
				d="M0 6C0 2.68629 2.68629 0 6 0H15V24H6C2.68629 24 0 21.3137 0 18V6Z"
				fill="currentColor"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.77538 16.8011L5.21011 12.4801C4.92996 12.215 4.92996 11.785 5.21011 11.5199L9.77538 7.19887C10.0555 6.93371 10.5097 6.93371 10.7899 7.19887C11.07 7.46403 11.07 7.89394 10.7899 8.15909L6.73187 12L10.7899 15.8409C11.07 16.1061 11.07 16.536 10.7899 16.8011C10.5097 17.0663 10.0555 17.0663 9.77538 16.8011Z"
				fill="white"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(SidebarArrowIcon)
