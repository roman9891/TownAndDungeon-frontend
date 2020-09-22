import React, { Component } from 'react';
import TownCharacterContainer from './TownCharacterContainer'
import TownSkillContainer from './TownSkillContainer'
import Dungeon from './Dungeon'
import {classes} from '../CharacterData'

class TownContainer extends Component {
    state = {
        town: true,
        selectedHero: '',
        warriorSkills: [],
        wizardSkills: []
    }

    clickHandler = () => {
        this.setState({town: !this.state.town})
    }

    townHandler = (hero) => {
        this.setState({selectedHero: hero}, () => console.log(this.state))
    }

    skillHandler = (skill) => {
        if (this.state.selectedHero === 'warrior' && !this.state.warriorSkills.includes(skill) && this.state.warriorSkills.length < 4) {
            this.setState({warriorSkills: this.state.warriorSkills.concat(skill)}, () => console.log(this.state))
        }
        if (this.state.selectedHero === 'wizard') {
            this.setState({wizardSkills: this.state.wizardSkills.concat(skill)}, () => console.log(this.state))
        }
    }

    floorHandler = (floor) => {
        
        const participants = {heroes: classes, enemies: floor.enemies}
        console.log(participants.heroes[0])
        participants.heroes[0].skills = this.state.warriorSkills
        participants.heroes[1].skills = this.state.wizardSkills
        this.props.battleHandler(participants)
    }

    render() {
        return (
            <div id='town-container'>
                <button onClick={this.clickHandler}>{this.state.town ? 'To Dungeon' : 'To Town'}</button>
                {this.state.town ? 
                    <div id='character-skill-div'>
                        <TownCharacterContainer townHandler={this.townHandler}/>
                        <TownSkillContainer selectedHero={this.state.selectedHero} skillHandler={this.skillHandler}/>
                    </div> 
                    : 
                    <Dungeon 
                        user={this.props.user}
                        warriorSkills={this.state.warriorSkills}
                        wizardSkills={this.state.wizardSkills}
                        floorHandler={this.floorHandler}
                    />
                }   
            </div>
        );
    }
}

export default TownContainer;
