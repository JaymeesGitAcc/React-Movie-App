import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false,
    url: ''
}

export const videoPlayerSlice = createSlice({
    name: 'videoPlayer',
    initialState,
    reducers: {
        showVideoPlayer: (state) => {
            state.display = true;
        },
        hideVideoPlayer: (state) => {
            state.display = false;
            state.url = '';
        },
        setURL: (state, action) => {
            state.url = action.payload;
        }
    }
});

export const { 
    showVideoPlayer, 
    hideVideoPlayer,
    setURL
} = videoPlayerSlice.actions;

export const displayState = (state) => state.videoPlayer.display;
export const source = (state) => state.videoPlayer.url;

export default videoPlayerSlice.reducer;