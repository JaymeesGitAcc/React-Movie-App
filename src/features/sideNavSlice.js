import { createSlice } from '@reduxjs/toolkit';

export const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState: {
        flag: false
    },
    reducers: {
        openSideNav: (state) => {
            state.flag = true;
        },
        closeSideNav: (state) => {
            state.flag = false;   
        }
    }
});

export const flag = (state) => state.sideNav.flag;
export const { openSideNav, closeSideNav } = sideNavSlice.actions;

export default sideNavSlice.reducer;