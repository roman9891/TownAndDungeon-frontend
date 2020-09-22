import React, { Component } from 'react';
import TownSkillInfo from '../Components/TownSkillInfo'
import TownSkillList from './TownSkillList'

class TownSkillContainer extends Component {
    render() {
        return (
            <div id='town-skill-container'>
                <TownSkillInfo/>
                <TownSkillList selectedHero={this.props.selectedHero} skillHandler={this.props.skillHandler}/>
            </div>
        );
    }
}

export default TownSkillContainer;
