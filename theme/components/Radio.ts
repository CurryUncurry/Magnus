import { ComponentMultiStyleConfig } from '@chakra-ui/react'

const Radio = {
	parts: ['container', 'control', 'label'],
	baseStyle: ({ color = 'black', controlColor = 'accent', fontSize = '1.8rem', controlSize = '1.8rem' }) => ({
		container: {
			fontSize: fontSize,
			d: 'inline-flex',
			alignItems: 'center'
		},
		control: {
			borderRadius: '50%',
			border: '1px solid',
			borderColor: 'gray2',
			width: controlSize,
			height: controlSize,
			background: 'rgba(0,0,0,0)',
			_checked: {
				borderColor: controlColor,
				background: controlColor,
				_before: {
					display: 'none'
				},
				_hover: {
					background: controlColor,
					borderColor: controlColor
				}
			}
		},
		label: {
			fontSize: fontSize,
			color: color,
			marginLeft: '0.5em',
			lineHeight: '1.2em'
		}
	}),
	sizes: {
		main: {}
	},
	variants: {
		main: {}
	},
	defaultProps: {
		size: 'main',
		variants: 'main'
	}
} as ComponentMultiStyleConfig

export default Radio
