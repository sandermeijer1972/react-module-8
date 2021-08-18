import React from "react"

class Formulier extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            lactose: false,
            nuts: false,
            gluten: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = event => {
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            lactose: false,
            nuts: false,
            gluten: false,
        })
        event.preventDefault()
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })         
    }
    
    render() {
        return (
            <div className="grid">
                <div className="formulier">
                    <form>
                        <input
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange} 
                            placeholder="First Name" 
                        />
                        <input 
                            name="lastName" 
                            value={this.state.lastName} 
                            onChange={this.handleChange} 
                            placeholder="Last Name" 
                        />
                        <input 
                            name="age" 
                            value={this.state.age} 
                            onChange={this.handleChange} 
                            placeholder="Age" 
                        /> 
                        <div className="gender">
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="Male" 
                                    checked={this.state.gender === "Male"}
                                    onChange={this.handleChange}
                                /> Male
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="Female" 
                                    checked={this.state.gender === "Female"}
                                    onChange={this.handleChange}
                                /> Female
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="Other"
                                    checked={this.state.gender === "Other"}
                                    onChange={this.handleChange} 
                                /> Other
                            </label>
                        </div>                      
                        <select
                            name="destination"
                            value={this.state.destination}
                            onChange={this.handleChange}
                        >
                            <option value="">-- Choose Favorite Destination --</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Spain">Spain</option>
                            <option value="Italy">Italy</option>
                        </select>
                        <div className="foodallergy">
                            <h3>Do you have some food allergies?</h3>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="lactose" 
                                    checked={this.state.lactose}
                                    onChange={this.handleChange} 
                                /> lactose intolerance
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="nuts" 
                                    checked={this.state.nuts}
                                    onChange={this.handleChange} 
                                /> nuts allergy
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="gluten" 
                                    checked={this.state.gluten}
                                    onChange={this.handleChange} 
                                /> gluten intolerance
                            </label>
                        </div>
                        <button onClick={this.handleClick.bind(this)}>Refresh</button>
                    </form>
                </div>
                <div className="ingevuld" style={{backgroundColor: this.state.gender === "Male" ? "#3399FF" : this.state.gender === "Female" ? "#FF99FF" : "#FFFF99"}}>
                    <h2>Entered information:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your favorite destination: {this.state.destination}</p>
                    <p>Your food allergies: <span style={{display: (this.state.lactose || this.state.nuts || this.state.gluten) && "none"}}>None</span></p>
                    <ul>                        
                        <li style={{display: !this.state.lactose && "none"}}> Lactose Intolerance </li>
                        <li style={{display: !this.state.nuts && "none"}}>Nuts Allergy</li>
                        <li style={{display: !this.state.gluten && "none"}}>Gluten Intolerance</li>
                    </ul>
                </div>                
            </div>
        )
    }
}

export default Formulier