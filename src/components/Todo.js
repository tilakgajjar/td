import React from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css';
import { Segment, Button } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'


const Todo = ({ onClick, completed, text }) => (

       <Button fluid color={completed ? 'facebook' : 'twitter'} onClick={onClick} checked={completed}
         style={{textDecoration: completed ? 'line-through' : 'none'}}
         >
         {text}
       </Button>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
