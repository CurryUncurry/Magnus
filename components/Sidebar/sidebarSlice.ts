import { createSlice } from '@reduxjs/toolkit'

export type SidebarState = {
  isOpen: boolean;
  theme: 'light' | 'dark';
};

const initialState: SidebarState = {
	isOpen: true,
	theme: 'dark'
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		close: (state) => {
			state.isOpen = false
		},
		open: (state) => {
			state.isOpen = true
		}
	}
})

export const { open, close } = sidebarSlice.actions

export default sidebarSlice.reducer
