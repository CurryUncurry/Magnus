const Table = {
	baseStyle: {
		th: {
			fontWeight: 400,
			letterSpacing: 'initial',
			textTransform: 'none',
			color: 'black',
			height: 'initial',
			lineHeight: 'initial'
		},
		td: {
			fontSize: '1.8rem'
		},
		thead: {
			// thead styles,
			bg: '#FBFBFB'
		}
	},
	variants: {
		main: {
			th: {
				fontSize: '2rem',
				paddingTop: '2.3rem',
				paddingBottom: '2.3rem'
			},
			td: {
				paddingTop: '2rem',
				paddingBottom: '2rem',
				borderBottom: '1px solid rgba(92, 92, 92, 0.2)',
				lineHeight: 1.2
			},
			tr: {
				'&:last-of-type': {
					td: { borderBottomWidth: 0 }
				}
			},
			caption: {
				fontSize: '1.4rem',
				textAlign: 'left',
				color: 'gray6'
			}
		},
		nodivider: {
			th: {
				fontSize: '2rem',
				paddingTop: '2.3rem',
				paddingBottom: '2.3rem'
			},
			td: {
				paddingTop: '2rem',
				lineHeight: 1.2
			},
			caption: {
				fontSize: '1.4rem',
				textAlign: 'left',
				color: 'gray6'
			}
		}
	}
}

export default Table
