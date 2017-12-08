//Actions are payloads of information that send data from your application to your store
//Action Creator - the functions that create actions
//Dispatch() or react-redux connect() method to dispatch actions

export const ADD_TODO = 'ADD_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/*
export const VisibilityFilters = {
  SHOW: 'SHOW'
}
*/
let counter = 0

export function addTodo(text) {
  return {
    id: counter++ ,
    type: ADD_TODO,
    text }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id }
}

export function clearCompleted(TodoList) {
  return {
    type: CLEAR_COMPLETED,
    todos: TodoList
    }
}

/*
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter }
}

*/
