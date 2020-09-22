import React, { Component } from 'react';
import TownCharacterCard from '../Components/TownCharacterCard'
import {classes} from '../CharacterData'

class TownCharacterList extends Component {
    
    renderCharacters = () => classes.map(classObject => <TownCharacterCard 
        key={classObject.id} 
        class={classObject} 
        townHandler={this.props.townHandler}
    />)
    
    render() {
        return (
            <div>
                {this.renderCharacters()}
            </div>
        );
    }
}

export default TownCharacterList;
