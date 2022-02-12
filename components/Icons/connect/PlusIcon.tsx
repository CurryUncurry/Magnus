import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '@hoc/chakraSvg'
import { SVGProps } from 'react'

type PlusIconProps = {
  bgColor: string;
} & OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>;

function PlusIcon (props: PlusIconProps) {
	const { bgColor, ...rest } = props
	return (
		<chakra.svg
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			fill="none"
			{...rest}
		>
			<circle cx="10" cy="10" r="10" fill={bgColor || '#373737'} />
			<rect
				x="9.33331"
				y="6"
				width="1.33333"
				height="8"
				rx="0.666667"
				fill="currentColor"
			/>
			<rect
				x="6"
				y="10.6667"
				width="1.33333"
				height="8"
				rx="0.666667"
				transform="rotate(-90 6 10.6667)"
				fill="currentColor"
			/>
		</chakra.svg>
	)
}

export default chakraSvg(PlusIcon)
