import { useEffect, useState } from "react"

function App() {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(60)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setIsActive(false)
    setTime(60)
  }

  useEffect(() => {
    let interval = null
    
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    } else if (!isActive || time == 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, time])
  
  return (
    <div className="container">
      <h1>Countdown timer</h1>
      <div className="box">
        <h2>{time}</h2>
        <div>
          <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
