import React, { useReducer } from 'react'

const reducer = (state = 'copy cat', action) => {
  switch (action.type) {
    case 'SET_STATE':
      return (event) => {
        event.target.value = action.value
      }
    default:
      return state
  }
}

const useReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, 'copy cat')
  return (
    <div className='input2'>
      <input type='text' placeholder='enter something....' onChange={() => dispatch({ type: 'SET_STATE' })} />
      {state}
    </div>
  )
}

export default useReducer2
