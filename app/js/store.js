'use strict'

import { createStore, combineReducers } from 'redux'

import reducers from './reducers'

const store = createStore(
  combineReducers(reducers),
  {
    students: []
  }
)

export default store
