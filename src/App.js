import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import ClearButton from './containers/ClearButton'
import Completed from './components/Completed'


const App = () => (
  <div className="AppContainer">
      <div>
        <h1 align="center">My Todo List</h1>
        <AddTodo />
        <VisibleTodoList />
        <ClearButton />
        <Completed />
      </div>
  </div>
)

export default App
