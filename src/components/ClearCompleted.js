import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Accordion, Segment, Button } from 'semantic-ui-react'
import { setVisibilityFilter, clearCompleted } from '../actions'
import Link from '../components/Link'
import FilterLink from '../containers/FilterLink'
import TodoList from './TodoList'



const ClearCompleted = ({dispatch}) => (

  <div>
      <Button fluid onSubmit={e => {
        dispatch(clearCompleted())
      }}>
          Clear Completed
      </Button>
  </div>
)

/*
  <div>
      <Button fluid>
        <FilterLink filter="SHOW" onSubmit={e => {
          dispatch(clearCompleted())
        }}>
          Clear Completed
        </FilterLink>
      </Button>
  </div>
*/

ClearCompleted.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
}

//clearCompleted = connect()(clearCompleted);

export default ClearCompleted;
