import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {
    render() {
        return (
            <ul className="boodschappenlijstje">                
                <ListItem title="afbakbroodjes" />
                <ListItem title="hagelslag" />
                <ListItem title="pindakaas" />
                <ListItem title="roggebrood" />
                <ListItem title="m&m's" />
                <ListItem title="perssinaasappelen" />
                <ListItem title="emmertje yoghurt" />
                <ListItem title="bananen" />
                <ListItem title="borrelnootjes" />
                <ListItem title="bitterballen" />
                <ListItem title="doos eieren" />                
                <ListItem title="schuursponsjes" />                        
            </ul>
        )
    }
}

export default List