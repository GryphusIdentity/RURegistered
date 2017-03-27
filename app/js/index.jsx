'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Provider } from 'react-redux'

import store from './store'
import router from './router.jsx'

/**
 * Tap Event
 * @ignore
 */
injectTapEventPlugin()

/**
 * Styles
 * @ignore
 */
const style = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '100',
    position: 'relative',
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '100',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  }
}

/**
 * MainLayout
 */
class MainLayout extends React.Component {

  render () {
    let { props: { children } } = this
    let { appContainer, viewContainer } = style

    return (
      <div style={appContainer}>
        <div style={viewContainer}>
          {router}
        </div>
      </div>
    )
  }

}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
