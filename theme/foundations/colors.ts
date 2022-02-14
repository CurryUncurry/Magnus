import { ResponsiveValue } from '@chakra-ui/react'
import { Property } from 'csstype'

const colors: { [name: string]: string & ResponsiveValue<Property.Color> } = {
	black: '#111111',
	'black-secondary': '#242529',
	white: '#fff',
	orange: '#F57351',
	gray94: '#949494',
	'green-secondary': '#DBF6DE',
	green: '#5EBC67',
	'red-secondary': '#EEBEBE',
	red: '#DF1D1D',
	line: '#393B43',
	gray58: '#585858',
	gray37: '#373737',
	gradient: 'linear-gradient(#B93FF0, #FD7B3B)'
}

export default colors
