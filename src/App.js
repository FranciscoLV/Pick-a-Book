import React from 'react';
import './App.css';
import { Home } from './Pages/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>

  );
}

export default App;
