import React from 'react';
import TrendingMovies from './features/trendingMovies/TrendingMovies/TrendingMovies';
import TrendingShows from './features/trendingTvShows/TrendingShows/TrendingShows';

function App() {
  return (
    <div className="App">
      <TrendingMovies />
      <TrendingShows/>
    </div>
  );
}

export default App;
