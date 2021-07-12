import React from 'react';
import './App.css';
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { BookInfo } from './Pages/BookInfo';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/:bookId'>
          <BookInfo/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
