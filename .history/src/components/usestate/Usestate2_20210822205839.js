import React, { useState } from 'react'

const Usestate2 = () => {
  const [inputValue, setInputValue] = useState('copy cat')
  return (
    <div className='input2'>
      <input type='text' placeholder='enter something....' />
      {inputValue}
    </div>
  )
}

export default Usestate2
