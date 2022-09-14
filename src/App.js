import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';

import SignUp from './pages/signup';
import Login from './pages/login';
import Menu from './pages/menu';


import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';
import Admin from './pages/admin';
import Booknow from './pages/Booknow';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/Rooms" component={Rooms} />

          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
