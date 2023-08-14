import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playerState: false,
    youtubeID: ''
}

export const youtubePlayer = createSlice({
    name: 'youtubePlayer',
    initialState,
    reducers: {
        showYoutubePlayer: (state) => {
            state.playerState = true;
        },
        hideYoutubePlayer: (state) => {
            state.playerState = false;
        }, 
        setYoutubeID: (state, action) => {
            state.youtubeID = action.payload;
        }, 
    }
})

export const { 
    showYoutubePlayer, 
    hideYoutubePlayer, 
    setYoutubeID } = youtubePlayer.actions;

export default youtubePlayer.reducer;
