import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
    </div>
  )
}

export default Usestate
