'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import TextField from 'material-ui/TextField'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import { List, ListItem } from 'material-ui/List'
import View from './common/View.jsx'
import Table from './Table.jsx'
import { connect } from 'react-redux'
/**
 * Styles
 */
const style = {
  rowStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
  },
  tableStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 90,
  },
  colStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 100,
  },
  actionStyle: {
    position: 'relative',
    flex: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topBarStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 100,
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
    justifyContent: 'flex-end',
  },
  toggleContainerBase: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
  },

  headingContainer: {
    position: 'relative',
    width: '640px',
    display: 'flex',
    flex: 100,
    justifyContent: 'center'
  },

  centerIconStyle: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (id) => {
      fetch(`http://localhost:2456/api/v1/student?id=${id}`).then(res => res.json()).then(data => {
        console.log('DATA', data)
        dispatch({
          type: 'LOOKUP_STUDENT_FULFILLED',
          data
        })
      })
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 * RURegistered
 */
class RURegistered extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  componentDidMount() {
    // On loaded trigger
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    let { rowStyle, colStyle, buttonContainer, headingContainer, centerIconStyle, actionStyle, topBarStyle } = style

    return (
      <div style={colStyle}>
        <Toolbar>
          <ToolbarGroup style={topBarStyle}>
            <ToolbarTitle text="User Actions" />
            <FlatButton label="Item 1" />
            <FlatButton label="Item 2" />
            <FlatButton label="Item 3" />
          </ToolbarGroup>
        </Toolbar>
        <div style={rowStyle}>
          <div style={actionStyle}>
            <List >
              <CardHeader
                subtitle="Data Actions"
              />
              <ListItem primaryText="Item 1" onTouchTap={ev => this.props.search('G16G2513')} />
              <ListItem primaryText="Item 2" />
              <ListItem primaryText="Item 3" />
            </List>
          </div>
          <div style={rowStyle}>
            <Table id="G16G2513" />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RURegistered)
