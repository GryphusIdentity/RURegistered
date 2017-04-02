'use strict'


export default function StudentReducer(previous = {}, action) {

  if (action.type === 'LOOKUP_STUDENT_FULFILLED') {
    console.log(action)
    return Object.assign(action.data)
  }

  return previous
}
