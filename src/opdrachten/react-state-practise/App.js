import React from "react"

// PART 1

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

// class App extends Component() {
//     return (
//         <div>
//             <h1>{this.state.name}</h1>
//             <h3>{this.state.age} years old</h3>
//         </div>
//     )    
// }

// PART 2

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

// function App() {
//     return (
//         <div>
//             <h1>You are currently logged (in/out)</h1>
//         </div>
//     )
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Sander Meijer",
            age: 48,
            isLoggedIn: true
        }
    }
    render() {
        let logStatus
        if (this.state.isLoggedIn == true) {
            logStatus = "in"
        } else {
            logStatus = "out"
        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
                <h2 style={{color: this.state.isLoggedIn ? "#00FF00" : "#FF0000"}}>You are currently logged {logStatus}</h2>
            </div>
        )
    }    
}

export default App