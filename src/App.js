import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Article from "./js/routes/article"
import Todos from "./js/routes/todos"
import Home from "./js/routes/index"
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Use Redux</h1>
        </header>
        
        <div className="App-content">

          <Article />
          
          {/* <Router>
            <div className="Rouer-list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/article">ArticlePage</Link>
                </li>
                <li>
                  <Link to="/todos">TodosPage</Link>
                </li>
              </ul>

              <Route exact path="/" component={Home}/>
              <Route path="/article" component={Article} />
              <Route path="/todos" component={Todos} />
            </div>
          </Router> */}
        </div>
      </div>
    );
  }
}

export default App;
