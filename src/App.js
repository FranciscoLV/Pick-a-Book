import React from 'react';
import './App.css';
import { Home } from './Pages/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
