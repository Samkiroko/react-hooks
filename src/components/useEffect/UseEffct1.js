import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const UseEffct1 = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
  }, [count])
  return (
    <StyledButton className='counter' onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </StyledButton>
  )
}

export default UseEffct1

const StyledButton = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
