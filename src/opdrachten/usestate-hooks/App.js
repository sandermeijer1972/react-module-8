import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function multiply() {
        setCount(prevCount => prevCount * 2)
    }

    function divide() {
        setCount(prevCount => prevCount / 2)
    }
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div className="teller">
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multiply}>x</button>
            <button onClick={divide}>÷</button>
        </div>
    )
}

export default App