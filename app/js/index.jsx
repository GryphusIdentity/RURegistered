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
}

/**
 * MainLayout
 */
class MainLayout extends React.Component {

  render () {
    let { props: { children } } = this

    return (
      <div>
        <h1>Hello World!</h1>
        {router}
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
