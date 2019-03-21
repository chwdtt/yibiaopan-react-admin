import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
