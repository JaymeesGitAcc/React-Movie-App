import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesReducer from '../features/trendingMovies/trendingMoviesSlice';
import trendingShowsReducer from '../features/trendingTvShows/trendingShowsSlice';
import movieDetailsReducer from '../features/movieDetailsSlice';

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingShows: trendingShowsReducer,
    movieDetails: movieDetailsReducer
  },
});
