import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesReducer from '../features/trendingMoviesSlice';
import trendingShowsReducer from '../features/trendingShowsSlice';
import movieDetailsReducer from '../features/movieDetailsSlice';
import showDetailsReducer from '../features/tvShowDetailsSlice';
import searchResultsReducer from '../features/searchSlice';
import youtubePlayerReducer from '../features/youtubePlayerSlice';
import personDetailsReducer from '../features/personDetailsSlice';
import movieListReducer from '../features/moviesListSlice';
import tvShowListReducer from '../features/tvShowListSlice';

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingShows: trendingShowsReducer,
    movieDetails: movieDetailsReducer,
    showDetails: showDetailsReducer,
    searchResults: searchResultsReducer,
    youtubePlayer: youtubePlayerReducer,
    personDetails: personDetailsReducer,
    movieList: movieListReducer,
    tvShowList: tvShowListReducer,
  }
});
