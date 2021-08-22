import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className='counter'>
        <button>increase</button>
        {count}
      </div>
      <button>decrease</button>
    </div>
  )
}

export default Usestate
