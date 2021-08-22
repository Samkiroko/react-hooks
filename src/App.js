import UseEffct1 from './components/useEffect/UseEffct1'
import UseReducer2 from './components/usereducer/UseReducer2'
import UserReducer from './components/usereducer/UserReducer'
import Usestate from './components/usestate/Usestate'
import Usestate2 from './components/usestate/Usestate2'

function App() {
  return (
    <div className='App'>
      <h1>UseState</h1>
      <Usestate />
      <Usestate2 />
      <h1>UseReducer</h1>
      <UserReducer />
      <UseReducer2 />
      <h1>UseEffect</h1>
      <UseEffct1 />
    </div>
  )
}

export default App
