import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Home from './Pages/HomePage/Home';
import SearchResults from './Pages/SearchResults/SearchResults';
import NotFound from './Pages/NotFound/NotFound';
import TvShowDetails from './Pages/TvShowDetails/TvShowDetails';
import PersonDetails from './Pages/PersonDetails/PersonDetails';
import MovieList from './Pages/MovieList/MovieList';
import TvShowList from './Pages/TvShowList/TvShowList';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
            <Route path="/tv/:id" element={<TvShowDetails />} />
            <Route path="/results/:query" element={<SearchResults />} />
            <Route path="/person/:personID" element={<PersonDetails />} />
            <Route path="/movies/:show_by" element={<MovieList />} />
            <Route path= "/shows/:show_by" element={<TvShowList/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>

          <SideNavBar />
        </div>
      </Router>
    </>
  );
}

export default App;
