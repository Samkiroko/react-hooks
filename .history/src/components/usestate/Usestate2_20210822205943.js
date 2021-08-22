import React, { useState } from 'react'

const Usestate2 = () => {
  const [inputValue, setInputValue] = useState('copy cat')
  const inputData = (event) => {
    setInputValue(event.target.value)
  }
   }
  return (
    <div className='input2'>
      <input type='text' placeholder='enter something....' />
      {inputValue}
    </div>
  )
}

export default Usestate2
