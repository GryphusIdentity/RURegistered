'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const PageA = (props) => <h1>Hello A</h1>
const PageB = (props) => <h1>Hello B</h1>

/**
 * Export
 * @ignore
 */
export default (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={PageA} />
      <Route path="/b" component={PageB} />
    </div>
  </Router>
)
