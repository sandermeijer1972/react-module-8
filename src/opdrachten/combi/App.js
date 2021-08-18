import React from "react"
import Menu from "./Menu"
import Begin from "./Begin"
import Grappen from "./Grappen"
import Star from "./Star"
import Hooks from "./Hooks"
import Todo from "./Todo"
import Form from "./Form"
import Inloggen from "./Inloggen"
import Meme from "./Meme"

class App extends React.Component {
    constructor() {
        super()
        this.state = {start: true, grap: false, star: false, hook: false, todo: false, form: false, cond: false, meme: false}
    }
    render() {   
        const resetMenu = () => {
            this.setState({start: true, grap: false, star: false, hook: false, todo: false, form: false, cond: false, meme: false})
        }   
        const changeMenuState = (menu) => {
            switch(menu) {
                case "grap":
                    this.setState({grap: true, start: false})
                    break
                case "star":
                    this.setState({star: true, start: false})
                    break
                case "hook":
                    this.setState({hook: true, start: false})
                    break
                case "todo":
                    this.setState({todo: true, start: false})
                    break
                case "form":
                    this.setState({form: true, start: false})
                    break
                case "cond":
                    this.setState({cond: true, start: false})
                    break
                case "meme":
                    this.setState({meme: true, start: false})
                    break
                default:
                    this.setState({start: false, grap: false, star: false, hook: false, todo: false, form: false, cond: false, meme: false})
            }
        }  
        const handleMenuClick = (event) => {
            const clickedItem = event.target.getAttribute("value")
            console.log("geklikt op knop: ", clickedItem)
            resetMenu()
            changeMenuState(clickedItem)
        }
        return (
            <div>
                <Menu handleMenuClick={handleMenuClick} />
                <Begin status={this.state.start} />
                <Grappen status={this.state.grap} />
                <Star status={this.state.star} />
                <Hooks status={this.state.hook} />
                <Todo status={this.state.todo} />
                <Form status={this.state.form} />
                <Inloggen status={this.state.cond} />
                <Meme status={this.state.meme} />
            </div>
        )
    }
}

export default App