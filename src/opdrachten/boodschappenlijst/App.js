import React from "react"
import Header from "./Header"
import List from "./List"

function App() {
    return(
        <div>
            <Header />
            <div className="lijsten">
                <List />
            </div>            
        </div>
    )
}

export default App