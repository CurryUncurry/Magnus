import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: (props: any) => ({
		html: {
			fontSize: '16px'
		},
		body: {
			fontSize: 'text',
			overflowX: 'hidden',
			bg: mode('#ffffff', '#111111')(props)
		},
		h1: {
			textStyle: 'h1'
		},
		h2: {
			textStyle: 'h2'
		},
		h3: {
			textStyle: 'h3'
		},
		h4: {
			textStyle: 'h4'
		},
		h5: {
			textStyle: 'h5'
		}
	})
}

export default styles
