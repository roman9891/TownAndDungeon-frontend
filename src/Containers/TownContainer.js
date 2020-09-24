import React, { Component } from 'react';
import TownCharacterContainer from './TownCharacterContainer'
import TownSkillContainer from './TownSkillContainer'
import Dungeon from './Dungeon'
import {classes} from '../CharacterData'

class TownContainer extends Component {
    state = {
        town: true,
        selectedHero: '',
        selectedSkill: {},
        warrior: this.props.skills.find(skillSet => skillSet[0] === 'warrior') ? this.props.skills.find(skillSet => skillSet[0] === 'warrior')[1] : [], 
        wizard: this.props.skills.find(skillSet => skillSet[0] === 'wizard') ? this.props.skills.find(skillSet => skillSet[0] === 'wizard')[1] : [],
    }

    clickHandler = () => {
        this.setState({town: !this.state.town})
    }

    townHandler = (hero) => {
        this.setState({selectedHero: hero}, () => console.log(this.state))
    }

    skillRemover = (skill, className) => {
        this.setState({[className]: this.state[className].filter(skillObj => skillObj.name !== skill)})
    }

    skillHandler = (skill) => {
        this.setState({selectedSkill: skill})
        if (this.state.selectedHero === 'warrior' && !this.state.warrior.includes(skill) && this.state.warrior.length < 4) {
            this.setState({warrior: this.state.warrior.concat(skill)}, () => console.log(this.state))
        }
        if (this.state.selectedHero === 'wizard' && !this.state.wizard.includes(skill) && this.state.wizard.length < 4) {
            this.setState({wizard: this.state.wizard.concat(skill)}, () => console.log(this.state))
        }
    }

    floorHandler = (floor) => {
        const enemiesWithId = floor.enemies.map((enemy,i) => {return {...enemy,index: i}})
        const heroes = classes.map((hero, i) => {return {...hero, index: i}})
        const participants = {heroes: heroes, enemies: enemiesWithId}
        // console.log(participants.heroes[0])
        participants.heroes[0].skills = this.state.warrior
        participants.heroes[1].skills = this.state.wizard
        this.props.battleHandler(participants, floor.num)
    }

    componentDidUpdate(prevProps) {
        if (this.props.skills !== prevProps.skills) {
            this.props.skills.forEach(classSkillPair => this.setState({
                [classSkillPair[0]]: classSkillPair[1]
            }, () => console.log(this.state)))
        }
    }

    render() {
        console.log(this.props)
        return (
            <div id='town-container'>
                <button onClick={this.clickHandler}>{this.state.town ? 'To Dungeon' : 'To Town'}</button>
                {this.state.town ? 
                    <div id='character-skill-div'>
                        <TownCharacterContainer townHandler={this.townHandler}
                            selectedSkills={{warrior: this.state.warrior, wizard: this.state.wizard}}
                            skillRemover={this.skillRemover}
                        />
                        <TownSkillContainer 
                            selectedHero={this.state.selectedHero} 
                            selectedSkill={this.state.selectedSkill}
                            skillHandler={this.skillHandler}
                        />
                    </div> 
                    : 
                    <Dungeon 
                        user={this.props.user}
                        // warriorSkills={this.state.warriorSkills}
                        // wizardSkills={this.state.wizardSkills}
                        floorHandler={this.floorHandler}
                    />
                }   
            </div>
        );
    }
}

export default TownContainer;
