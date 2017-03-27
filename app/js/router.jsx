'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Table from './components/Table.jsx'
import RURegistered from './components/RURegistered.jsx'


const history = createBrowserHistory()
/**
 * Export
 * @ignore
 */
export default (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={RURegistered} />
      <Route path="/table" component={Table} />
    </div>
  </Router>
)
