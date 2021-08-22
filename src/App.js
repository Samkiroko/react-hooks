import UseEffct1 from './components/useEffect/UseEffct1'
import UseReducer2 from './components/usereducer/UseReducer2'
import UserReducer from './components/usereducer/UserReducer'
import UseRef1 from './components/useRef/UseRef1'
import UseRef2 from './components/useRef/UseRef2'
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
      <h1>UseRef</h1>
      <UseRef1 />
      <UseRef2 />
    </div>
  )
}

export default App
