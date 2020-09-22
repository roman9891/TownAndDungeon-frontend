import React, { Component } from 'react';
import TownContainer from '../Containers/TownContainer'
import BattleContainer from '../Containers/BattleContainer'

class TownAndDungeon extends Component {
    state = {
        battle: false,
        participants: {}
    }

    battleHandler = (participants) => {
        console.log(participants)
        this.setState({
            participants: participants,
            battle: true
        })
    }

    render() {
        return (
            <div id='town-and-dungeon'>
                {this.state.battle ? <BattleContainer participants={this.state.participants}/> : <TownContainer user={this.props.user} battleHandler={this.battleHandler}/> }
            </div>
        );
    }
}

export default TownAndDungeon;
