import React, { useReducer } from 'react'

const useReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, 'copy cat')
  return (
    <div className='input2'>
      <input type='text' placeholder='enter something....' />
      {state}
    </div>
  )
}

export default useReducer2
