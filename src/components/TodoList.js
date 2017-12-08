import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Segment, Button, Menu } from 'semantic-ui-react'
import '../App.css'

const TodoList = ({ todos, onTodoClick }) => (

  <Button.Group fluid vertical>
    {todos.map((todo, id) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
  </Button.Group>

)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      show: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,

  onTodoClick: PropTypes.func.isRequired
}

export default TodoList


//List of Todos
