import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/HomePage/Home';
import SearchResults from './components/SearchResults/SearchResults';
import NotFound from './components/NotFound/NotFound';
import TvShowDetails from './components/TvShowDetails/TvShowDetails';
import PersonDetails from './components/PersonDetails/PersonDetails';
import MovieList from './components/MovieList/MovieList';
import TvShowList from './components/TvShowList/TvShowList';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv/:id" element={<TvShowDetails />} />
            <Route path="/results/:query" element={<SearchResults />} />
            <Route path="/person/:personID" element={<PersonDetails />} />
            <Route path="/movies/:show_by" element={<MovieList />} />
            <Route path= "/shows/:show_by" element={<TvShowList/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
