import React, { Component } from 'react';
import TownSkillInfo from '../Components/TownSkillInfo'
import TownSkillList from './TownSkillList'

class TownSkillContainer extends Component {
    render() {
        return (
            <div id='town-skill-container'>
                
                <TownSkillList 
                    selectedHero={this.props.selectedHero} 
                    skillHandler={this.props.skillHandler}
                    user={this.props.user}
                />
                <TownSkillInfo selectedSkill={this.props.selectedSkill}/>
            </div>
        );
    }
}

export default TownSkillContainer;
