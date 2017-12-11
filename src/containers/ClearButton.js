import React from 'react'
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'


class ClearButton extends React.Component {

  render() {

    const {clearCompleted} = this.props;

    return(
      <Button fluid  onClick={clearCompleted}>
        Clear Completed
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ clearCompleted }, dispatch);

export default connect(null, mapDispatchToProps)(ClearButton);
