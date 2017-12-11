import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Button } from 'semantic-ui-react'
import Todo from './Todo'


const TodoList = ({todos, onTodoClick}) => {

    return(

      <Button.Group fluid vertical>
        {todos.map((todo, id) =>
            (<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)

      )}
      </Button.Group>

    )
  }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
