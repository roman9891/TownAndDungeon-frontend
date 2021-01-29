import React, { Component } from 'react';
import TownSkillCard from '../Components/TownSkillCard'
import {skills} from '../Data/SkillData'

class TownSkillList extends Component {
    state = {
        selectedHero: 'warrior'
    }
    
    renderSkills = () => skills[this.props.selectedHero].map(skill => <TownSkillCard 
        key={skill.id} 
        skill={skill}
        skillHandler={this.props.skillHandler}
        />)

    renderSkillsByProgress = () => skills[this.props.selectedHero]
        .filter(skill => skill.progress < this.props.user.progress)
        .map(skill => <TownSkillCard 
        key={skill.id} 
        skill={skill}
        skillHandler={this.props.skillHandler}
        />)
    
    render() {
        return (
            <div id='town-skill-list'>
                {this.props.selectedHero ? this.renderSkillsByProgress() : null}
            </div>
        );
    }
}

export default TownSkillList;
