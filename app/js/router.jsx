'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'

import MyComponent from './components/MyComponent.jsx'

const PageA = (props) => <h1>Hello A</h1>
const PageB = (props) => <h1>Hello B</h1>

/**
 * Export
 * @ignore
 */
export default function createRouter (history) {

  return (
    <Router history={history}>
      <div>
        <Route exact={true} path="/" component={PageA} />
        <Route path="/b" component={PageB} />
      </div>
    </Router>
  )

}
