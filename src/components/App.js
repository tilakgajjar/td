import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ClearCompleted from './ClearCompleted'
import CompletedList from './CompletedList'
import '../App.css'

const App = () => (
  <div className="AppContainer">
      <div>
        <h1 align="center">My Todo List</h1>
        <AddTodo />
        <VisibleTodoList />
        <ClearCompleted />
        <CompletedList />
      </div>
  </div>
)

export default App

//Root components
