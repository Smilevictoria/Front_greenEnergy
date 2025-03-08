import { useState } from 'react'
import energyLogo from '/energy.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.taipower.com.tw/" target="_blank">
          <img src={energyLogo} className="logo energy" alt="Energy logo" />
        </a>
      </div>
      <h3>Welcome ! Mrs.Whiite ~</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Energy logos to Know more
      </p>
    </>
  )
}

export default App
