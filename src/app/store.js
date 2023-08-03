import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesReducer from '../features/trendingMovies/trendingMoviesSlice';
import trendingShowsReducer from '../features/trendingTvShows/trendingShowsSlice';
import movieDetailsReducer from '../features/movieDetailsSlice';
import showDetailsReducer from '../features/tvShowDetailsSlice';
import searchResultsReducer from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingShows: trendingShowsReducer,
    movieDetails: movieDetailsReducer,
    showDetails: showDetailsReducer,
    searchResults: searchResultsReducer
  },
});
