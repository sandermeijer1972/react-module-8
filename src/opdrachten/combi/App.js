import React from "react"
import Menu from "./Menu"
import Grappen from "./Grappen"
import Star from "./Star"
import Hooks from "./Hooks"
import Todo from "./Todo"
import Formulier from "./Formulier"
import Inloggen from "./Inloggen"
import Meme from "./Meme"

class App extends React.Component {
    constructor() {
        super()
        this.state = {grap: false, star: false, hook: false, todo: false, form: false, cond: false, meme: false}
    }
    render() {   
        const resetMenu = () => {
            this.setState({grap: false, star: false, hook: false, todo: false, form: false, cond: false, meme: false})
        }   
        const changeMenuState = (menu) => {
            switch(menu) {
                case "grap":
                    this.setState({grap: true})
                    break
                case "star":
                    this.setState({star: true})
                    break
                case "hook":
                    this.setState({hook: true})
                    break
                case "todo":
                    this.setState({todo: true})
                    break
                case "form":
                    this.setState({form: true})
                    break
                case "cond":
                    this.setState({cond: true})
                    break
                case "meme":
                    this.setState({meme: true})
                    break
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
                <Grappen status={this.state.grap} />
                <Star status={this.state.star} />
                <Hooks status={this.state.hook} />
                <Todo status={this.state.todo} />
                <Formulier status={this.state.form} />
                <Inloggen status={this.state.cond} />
                <Meme status={this.state.meme} />
            </div>
        )
    }
}

export default App