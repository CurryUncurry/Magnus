import { useState } from 'react'

export type HoverHandlerType = (bool: boolean) => () => void;

export const useHover = (
	initialState: boolean = false
): [boolean, HoverHandlerType] => {
	const [elementHovered, setElementHovered] = useState<boolean>(initialState)
	const hoverHandler: HoverHandlerType = (bool: boolean) => () =>
		setElementHovered(bool)

	return [elementHovered, hoverHandler]
}
