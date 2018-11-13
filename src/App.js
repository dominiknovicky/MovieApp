import React, { Component } from 'react';
import MoviesContainer from './containers/MoviesContainer/movies_container';
import './styles.css';
class App extends Component {
  render() {
    return (
      <div>
        <MoviesContainer/>
      </div>
    );
  }
}

export default App;
