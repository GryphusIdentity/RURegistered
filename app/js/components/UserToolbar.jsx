'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import { connect } from 'react-redux'

const styles = {
  userToolbarStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 100,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 * UserToolbar
 * A Toolbar component at the top of the web app to handle any user interactions:
 * Session managament, user preferences
 */
class UserToolbar extends React.Component {
  render() {
    let { userToolbarStyle } = styles
    return (
      <Toolbar>
        <ToolbarGroup style={userToolbarStyle}>
          <ToolbarTitle text="User Actions" />
          <FlatButton label="Item 1" />
          <FlatButton label="Item 2" />
          <FlatButton label="Logout" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserToolbar)
