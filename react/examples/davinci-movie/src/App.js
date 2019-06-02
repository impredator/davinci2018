import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/home/Index';
import User from './routes/user/Index';
import Detail from './routes/detail/Index';
import Seat from './routes/seat/Index';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/seat" exact component={Seat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
