import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false,
    ID: ''
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
        },
        setID: (state, action) => {
            state.ID = action.payload;
        }
    }
});

export const { 
    showVideoPlayer, 
    hideVideoPlayer,
    setID
} = videoPlayerSlice.actions;

export const displayState = (state) => state.videoPlayer.display;
export const videoID = (state) => state.videoPlayer.ID;

export default videoPlayerSlice.reducer;