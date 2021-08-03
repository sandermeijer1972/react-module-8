import React from "react"

// #1
// function App() {
//     return (
//         <div>
//             <Header username="Sander"/>
//             <Greeting />
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Sander" />
                <Greeting />
            </div>
        )
    }
}

// #2
// function Header(props) {
//     return (
//         <header>
//             <h1>Welcome, {props.username}!</h1>
//         </header>
//     )
// }

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Welcome, {this.props.username}!</h1>
            </header>
        )
    }
}

// #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h2>Good {timeOfDay} to you, sir!</h2>
//     )
// }

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"            
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h2>Good {timeOfDay} to you, sir!</h2>
        )
    }
}

export default App