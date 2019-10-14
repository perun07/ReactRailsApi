import React, { Component } from 'react';
import Reviews from './Reviews/Reviews';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Reviews />
    </div>
  );
  }
}

export default App;
