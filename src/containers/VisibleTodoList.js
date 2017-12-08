import { connect } from 'react-redux'
import { toggleTodo, clearCompleted } from '../actions'
import TodoList from '../components/TodoList'

/*
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW':
      return todos.filter(t => t.show)
    default:
      return todos
  }
}
*/

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onClearCompleted: todos => {
      dispatch(clearCompleted(todos))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
