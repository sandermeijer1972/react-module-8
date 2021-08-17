import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function Hooks(props) {

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
        <div className="hooks" style={{display: !props.status && "none"}}>
            <div className="teller">
                <h1 style={{color: color}}>{count}</h1>
                <button onClick={increment}>verhogen</button>
                <button onClick={decrement}>verlagen</button>
                <button onClick={multiply}>verdubbel</button>
                <button onClick={divide}>halveer</button>
            </div>
        </div>
    )
}

export default Hooks