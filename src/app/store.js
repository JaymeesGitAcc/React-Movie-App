import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesReducer from '../features/trendingMovies/trendingMoviesSlice';
import trendingShowsReducer from '../features/trendingTvShows/trendingShowsSlice';

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingShows: trendingShowsReducer,
  },
});
