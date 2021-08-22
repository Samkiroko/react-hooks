import React, { useReducer } from 'react'

const reducer = (state, dispatch) => {
  switch (dispatch.type) {
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
  return (
    <div className='input2'>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      conunt : {state}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  )
}

export default UserReducer
