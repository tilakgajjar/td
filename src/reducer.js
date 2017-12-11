import { combineReducers } from 'redux'
import { ADD_TODO, CLEAR_COMPLETED, TOGGLE_TODO } from './actions'

const todos = (state=[], action) => {
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        { id: action.id,
          text: action.text,
          completed: false,
          show: true,
        }
      ]

    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id!==action.id){
          return todo}
        else{
          return {...todo, completed: !todo.completed}
        }})

    case CLEAR_COMPLETED:
      return state.map(todo => {if (todo.completed)
        {return {...todo, show:false}}
          else {return todo}})

    default:
      return state
  }
}

/* same as combine reducer
const todoApp = (state={}, acttion) = {
  todos: todos(state.todos, action)
}
*/

const todoApp = combineReducers({
  todos: todos
})

export default todoApp;
