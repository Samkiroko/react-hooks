import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className='counter'>
        <button>increase</button>
        {count}
        <button>decrease</button>
      </div>
    </div>
  )
}

export default Usestate
