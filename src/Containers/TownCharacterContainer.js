import React, { Component } from 'react';
import TownCharacterList from './TownCharacterList'
import TownCharacterInfo from '../Components/TownCharacterInfo'

class TownCharacterContainer extends Component {
    render() {
        return (
            <div id='town-character-container'>
                <TownCharacterList townHandler={this.props.townHandler}/>
                <TownCharacterInfo/>
            </div>
        );
    }
}

export default TownCharacterContainer;
