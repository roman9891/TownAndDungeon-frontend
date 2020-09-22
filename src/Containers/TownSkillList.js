import React, { Component } from 'react';
import TownSkillCard from '../Components/TownSkillCard'
import {skills} from '../SkillData'

class TownSkillList extends Component {
    state = {
        selectedHero: 'warrior'
    }
    
    renderSkills = () => skills[this.props.selectedHero].map(skill => <TownSkillCard 
        key={skill.id} 
        skill={skill}
        skillHandler={this.props.skillHandler}
        />)
    
    render() {
        return (
            <div id='town-skill-list'>
                {this.props.selectedHero ? this.renderSkills() : null}
            </div>
        );
    }
}

export default TownSkillList;
