export const ADD_TODO = 'ADD_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let counter = 0;

export const addTodo = text => {
  return{
    type: ADD_TODO,
    text,
    id: counter++
  }
}

export const toggleTodo = (id) => {
  return{
    type: TOGGLE_TODO,
    id
  }
}

export const clearCompleted = () => {
  return{
    type: CLEAR_COMPLETED
  }
}
