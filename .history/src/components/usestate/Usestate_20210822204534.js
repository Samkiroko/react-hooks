import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <div className='counter'>
        <button onClick={increase}>increase</button>
        {count}
        <button>decrease</button>
      </div>
    </div>
  )
}

export default Usestate
