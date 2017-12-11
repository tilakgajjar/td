import React from 'react'
import { bindActionCreators } from 'redux';
import { Accordion, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import VisibleCompletedList from '../containers/VisibleCompletedList'

class Completed extends React.Component {

state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
      this.setState({ activeIndex: newIndex })
    }
  render() {

const { activeIndex } = this.state
    return(

      <Accordion fluid>
        <Accordion.Title active={activeIndex === 0} index={0}  onClick={this.handleClick}>
          <Icon name='dropdown' />
          Completed
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <VisibleCompletedList />
        </Accordion.Content>
      </Accordion>

    )
  }
}

export default Completed
