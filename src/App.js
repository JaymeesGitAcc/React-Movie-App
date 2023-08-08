import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/HomePage/Home';
import SearchResults from './components/SearchResults/SearchReults';
import NotFound from './components/NotFound/NotFound';
import TvShowDetails from './components/TvShowDetails/TvShowDetails';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useSelector } from 'react-redux';
import { hiddenState } from './features/videoPlayerSlice';

function App() {

  const hidden = useSelector(hiddenState);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv/:id" element={<TvShowDetails />} />
            <Route path="/results/:query" element={<SearchResults />} />
            <Route element={<NotFound />} />
          </Routes>

          {!hidden && <VideoPlayer/>} 
        </div>
      </Router>
    </>
  );
}

export default App;
