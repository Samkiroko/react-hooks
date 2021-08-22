import React, { useRef } from 'react'

const UseRef1 = () => {
  const ref = useRef(null)

  const onClick = () => {
    ref.current.focus()
  }
  return (
    <div>
      <input type='text' placeholder='Ex...' ref={ref} />
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef1
