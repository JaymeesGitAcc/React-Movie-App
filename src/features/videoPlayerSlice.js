import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    src: '',
    hidden: true,
    videos: null
}

export const videoPlayerSlice = createSlice({
    name: 'videoPlayer',
    initialState,
    reducers: {
        showVideoPlayer: (state, action) => {
            state.src = action.payload;
            state.hidden = false;
        },
        hideVideoPlayer: (state) => {
            state.src = '';
            state.hidden = true;
        }, 
        setVideos: (state, action) => {
            state.videos = action.payload;
        }
    }
});

export const { showVideoPlayer, hideVideoPlayer, setVideos } = videoPlayerSlice.actions;
export const videoSource = (state) => state.videoPlayer.src;
export const hiddenState = (state) => state.videoPlayer.hidden;

export default videoPlayerSlice.reducer;