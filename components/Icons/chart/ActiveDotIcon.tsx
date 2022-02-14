import { chakra, ChakraProps, OmitCommonProps } from '@chakra-ui/react'
import chakraSvg from '../../../hoc/chakraSvg'
import { SVGProps } from 'react'

function ActiveDotIcon ({
	cx,
	cy,
	...props
}: OmitCommonProps<SVGProps<SVGSVGElement>, keyof ChakraProps>) {
	return (
		<chakra.svg width="16" height="16"
		>
			<circle cx={cx} cy={cy} r="8" fill="white" fill-opacity="0.3" />
			<circle cx={cx} cy={cy} r="5" fill="white" />
			<circle cx={cx} cy={cy} r="3" fill="url(#gradient)" />
		</chakra.svg>
	)
}

export default chakraSvg(ActiveDotIcon)
