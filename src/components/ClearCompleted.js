import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Segment, Button } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'

const ClearCompleted = () => (

  <div className="completed">
      <Button fluid>
        <FilterLink filter="SHOW_ACTIVE">
          Clear Completed
        </FilterLink>
      </Button>
  </div>

)
/*
private clearCompleted = () =>
	{
		let items = this.state.items.filter((item: TodoItemData) =>
		{
			return !item.completed;
		})
		this.setState({items: items});
	}
*/

export default ClearCompleted;
