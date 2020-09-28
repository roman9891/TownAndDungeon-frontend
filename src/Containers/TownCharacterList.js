import React, { Component } from 'react';
import TownCharacterCard from '../Components/TownCharacterCard'
import {classes} from '../CharacterData'

class TownCharacterList extends Component {
    
    renderCharacters = () => classes.map(classObject => <TownCharacterCard 
        key={classObject.id} 
        class={classObject} 
        townHandler={this.props.townHandler}
        selectedSkills={this.props.selectedSkills}
        skillRemover={this.props.skillRemover}
    />)
    
    render() {
        // console.log(this.props)
        return (
            <div id='town-character-list'>
                {this.renderCharacters()}
            </div>
        );
    }
}

export default TownCharacterList;
