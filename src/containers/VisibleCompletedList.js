import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, clearCompleted } from '../actions'
import ClearButton from './ClearButton'


const getVisibleTodos = (todos) => {
  console.log('Hey');
  return todos.filter(t => t.completed)

}

const mapStateToProps = state => {
  return {
      todos: getVisibleTodos(state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onTodoClick: id => {
        dispatch(toggleTodo(id))
      }
  }
}
const VisibleCompletedList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleCompletedList
