import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const UseRef2 = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      ref.current.click()
    }
  }, [ref])

  return (
    <Button onClick={() => alert('You clicked!')} ref={ref}>
      Click me
    </Button>
  )
}

export default UseRef2

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  margin-top: 10px;

  :focus {
    outline: none;
  }
`
