'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

export default function createStore (history) {
  /**
   * Middleware
   * @ignore
   */
  const middleware = routerMiddleware(history)

  return createStore(
    combineReducers(
      Object.assign({}, reducers, { router: routerReducer })
    ),
    applyMiddleware(middleware)
  )
}
