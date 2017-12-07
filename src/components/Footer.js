import React from 'react'
import { Button } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div align="center">
    <Button.Group fluid>
      <Button>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
      </Button>
      <Button.Or />
      <Button>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </Button>
      <Button.Or />
      <Button>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </Button>
    </Button.Group>
  </div>

)

export default Footer


//Footer where we change currently visible Todo
