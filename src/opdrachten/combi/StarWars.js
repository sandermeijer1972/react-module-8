import React from "react"
import swpicture from "./images/starwars.png"


class StarWars extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {},         
        }
    }
    
    componentDidMount() {
        const randomNumber = Math.floor(Math.random() * 83) + 1
        console.log(randomNumber)
        this.setState({loading: true})
        //const apiURL = "https://swapi.dev/api/people/" + randomNumber
        const apiURL = `https://swapi.dev/api/people/${randomNumber}`
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    character: data
                })
            })        
    }
    
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name        
        return (
            <div className="starwars">
                <img src={swpicture} alt=""></img>
                <p style={{
                    color: this.state.character.gender === "female" ? "#FFCCFF" : this.state.character.gender === "male" ? "#99CCFF" : "#CCFFCC",
                    fontSize: "60px",
                    fontStyle: "bold",
                    textAlign: "center"}}
                >{text}
                </p>
                <div className="gegevens" style={{display: this.state.loading && "none"}}>
                    <p>height: {this.state.character.height} cm</p>
                    <p>weight: {this.state.character.mass} kg</p>
                    <p>skin-color: {this.state.character.skin_color}</p>
                    <p>hair-color: {this.state.character.skin_color}</p>
                    <p>eye-color: {this.state.character.eye_color}</p>                
                </div>              
            </div>
        )
    }
}

export default StarWars