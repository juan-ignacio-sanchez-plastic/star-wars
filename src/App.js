import React from 'react';
import { Home } from './views';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.sass';

function App () {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
