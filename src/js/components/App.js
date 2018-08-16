import React, { Component } from 'react';
import List from "./articles/List";
import CreateArticle from "./articles/CreateArticle";
import logo from './logo.svg';
import './App.css';
//import index from './js/index' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Use Redux</h1>
        </header>
        
        <div className="App-content">
          <CreateArticle />
          <List />
        </div>

      </div>
    );
  }
}

export default App;
