import React, { Component } from 'react';
import TownContainer from '../Containers/TownContainer'
import BattleContainer from '../Containers/BattleContainer'

class TownAndDungeon extends Component {
    state = {
        user: this.props.user,
        battle: false,
        participants: {},
        floorNum: 0,
        skills: []
    }

    battleHandler = (participants, floorNum) => {
        console.log(participants)
        this.setState({
            participants: participants,
            battle: true,
            floorNum: floorNum,
            skills: participants.heroes.map(hero => [hero.class.toLowerCase(), hero.skills])
        })
    }

    victoryHandler = (victory) => {
        if (victory && this.state.floorNum === this.state.user.progress) {
            this.setState({
                battle: false,
                user: {...this.state.user, progress: this.state.user.progress + 1}
            }, () => console.log('victoryHandler', this.state))
        } else {
            this.setState({battle: false})
        }
    }

    updateUser = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.user.id}`)
    }

    leaveHandler = () => {
        console.log('leaving')
        this.setState({battle: false})
    }

    render() {
        return (
            <div id='town-and-dungeon'>
                {this.state.battle ? 
                    <BattleContainer 
                        participants={this.state.participants} 
                        victoryHandler={this.victoryHandler}
                        leaveHandler={this.leaveHandler}
                    /> : 
                    <TownContainer 
                        user={this.state.user} 
                        battleHandler={this.battleHandler}
                        skills={this.state.skills}
                    /> 
                }
            </div>
        );
    }
}

export default TownAndDungeon;
