import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import 'semantic-ui-css/semantic.min.css';
import { Form, Input } from 'semantic-ui-react'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <Form size='large'
              onSubmit={e => {
                e.preventDefault()
                const input = document.querySelector('input[name=todo]')
                if (!input.value.trim()) {
                  return
                }
                dispatch(addTodo(input.value))
                input.value = ''
              }}
            >
          <Input fluid align="center" action={{ color: 'black', content: 'Add Todo' }}  placeholder='Task...' name='todo' />
         </Form>
    </div>

  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
