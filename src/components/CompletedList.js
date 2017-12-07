import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Segment, Button, Icon } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'



const CompletedList = () => (

    <Accordion>
        <Accordion.Title>
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
            {' '}welcome guest in many households across the world.
          </p>
        </Accordion.Content>
    </Accordion>

)

export default CompletedList;
