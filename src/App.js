import React from 'react';

import { Home, CharacterDetails } from './views';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

function App () {
  return (
    <div className="App">
      <div className='twinkling'>
        <Router>
          <Route exact path='/'><Home /></Route>
          <Route path='/character-details/:characterID/:characterName'><CharacterDetails /></Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
