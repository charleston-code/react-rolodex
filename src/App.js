import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hello Joe!</p>
          <button>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
