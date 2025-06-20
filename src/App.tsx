import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <TaskForm />
    </>
  )
}

export default App
