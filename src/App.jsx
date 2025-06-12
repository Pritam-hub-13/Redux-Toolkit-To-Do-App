import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><h1>Welcome to redux-toolkit</h1></div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
