import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render() {
        let logStatus = this.state.isLoggedIn ? "ingelogd" : "uitgelogd"
        let buttonText = this.state.isLoggedIn ? "LOG UIT" : "LOG IN"
        return (
            <div>
                <h2>je bent momenteel <span style={{color: this.state.isLoggedIn ? "#00FF00" : "#FF0000"}}>{logStatus}</span></h2>
                <button onClick={this.handleClick} style={{backgroundColor: this.state.isLoggedIn ? "#FF0000" : "#00FF00"}}>{buttonText}</button>
            </div>
        )
    }
}

export default App