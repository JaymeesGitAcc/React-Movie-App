import React from 'react';
import TrendingMovies from './features/trendingMovies/TrendingMovies/TrendingMovies';
import TrendingShows from './features/trendingTvShows/TrendingShows/TrendingShows';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <TrendingMovies />
      <TrendingShows/>
    </div>
  );
}

export default App;
