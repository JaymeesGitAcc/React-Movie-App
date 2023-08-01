import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/HomePage/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
