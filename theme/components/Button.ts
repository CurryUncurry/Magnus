const roundedButtonShadow: string = '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08);'

const outlineStyles = {
	bg: 'transparent',
	border: '1px solid',
	borderRadius: '.5rem',
	p: '1rem 4rem',
	h: 'fit-content',
	fontSize: '1.6rem'
}

const Button = {
	variants: {
		empty: {
			h: 'initial',
			p: '.5rem',
			bg: 'none',
			_active: {
				bg: 'none'
			},
			_hover: {
				bg: 'none'
			}
		},
		'rounded': {
			bg: 'red',
			color: 'white',
			p: 0,
			w: '4rem',
			h: '4rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '100%'
		},
		'rounded-slider': {
			bg: 'white',
			opacity: '.9',
			p: 0,
			w: '4rem',
			h: '4rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '100%',
			boxShadow: roundedButtonShadow,
			_active: {
				boxShadow: roundedButtonShadow
			},
			_focus: {
				boxShadow: roundedButtonShadow
			},
			_disabled: {
				boxShadow: roundedButtonShadow,
				opacity: '.5'
			}
		},
		action: {
			h: 'initial',
			fontSize: 'h5',
			bg: 'red',
			color: 'white',
			borderRadius: '.5rem'
		},
		'action-secondary': {
			h: 'initial',
			fontSize: 'h5',
			bg: 'gray1',
			opacity: '0.3',
			color: 'white',
			borderRadius: '.5rem'
		},
		'action-outline': {
			...outlineStyles,
			h: 'initial',
			fontSize: 'h5',
			borderColor: 'gray1',
			color: 'gray1',
			_hover: {
				bg: 'gray1',
				color: 'white'
			},
			_active: {
				bg: 'gray1',
				color: 'red'
			}
		},
		outline: {
			...outlineStyles,
			borderColor: 'orange',
			color: 'orange',
			_hover: {
				bg: 'orange',
				color: 'white'
			},
			_active: {
				bg: 'white',
				color: 'orange'
			}
		},
		'outline-secondary': {
			...outlineStyles,
			borderColor: 'gray1',
			color: 'gray1',
			_hover: {
				bg: 'gray1',
				color: 'white'
			},
			_active: {
				bg: 'gray1',
				color: 'red'
			}
		}
	},
	sizes: {
		sm: {
			p: '1rem 4rem'
		},
		md: {
			p: '10px 16px'
		}
	}
}

export default Button
