import React, { useReducer } from 'react'

const reducer = (state, dispatch) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const UserReducer = () => {
  // State is the state we want to show in the UI
  const [state, dispatch] = useReducer(reducer, 0)
  return <div></div>
}

export default UserReducer
