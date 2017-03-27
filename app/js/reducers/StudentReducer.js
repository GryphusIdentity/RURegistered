'use strict'


export default function StudentReducer (previous={}, action) {
  if (action.type === 'LOOKUP_STUDENT') {
    fetch(`http://localhost:2456/api/v1/student?id=${action.id}`).then(res => res.json()).then(data => {
      dispatch({
        type: 'STUDENT_RESULT',
        data
      })
    })
  } else if (action.type === 'STUDENT_RESULT') {
    let final_result = action.data
    // DO something with action.data
    return Object.assign({}, previous, final_result)
  }

  return previous
}