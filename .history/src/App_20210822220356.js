import useReducer2 from './components/usereducer/useReducer2'
import UserReducer from './components/usereducer/UserReducer'
import Usestate from './components/usestate/Usestate'
import Usestate2 from './components/usestate/Usestate2'

function App() {
  return (
    <div className='App'>
      <Usestate />
      <Usestate2 />
      <UserReducer />
      <useReducer2 />
    </div>
  )
}

export default App
