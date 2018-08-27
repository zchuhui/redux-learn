import React, { Component } from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibilityTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
