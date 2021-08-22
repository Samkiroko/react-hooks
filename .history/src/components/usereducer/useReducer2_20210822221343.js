import React, { useReducer } from 'react'

const reducer = (state = 'copy cat', action) => {
  switch (action.type) {
    case 'SET_STATE': {
      const newValue = action.payload
      return newValue
    }
    default:
      return state
  }
}

const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, 'copy cat')
  return (
    <div className='input2'>
      <input
        type='text'
        placeholder='enter something....'
        onChange={(event) => dispatch({ type: 'SET_STATE', payload: event.target.value })}
      />
      {state}
    </div>
  )
}

export default UseReducer2
