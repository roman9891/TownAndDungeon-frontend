import React, { Component } from 'react';

class TownSkillInfo extends Component {
    render() {
        return (
            <div id='town-skill-info'>
                <div>Name:{this.props.selectedSkill.name}</div>
                <div>Cost: {this.props.selectedSkill.cost}</div>
                <div>Target: {this.props.selectedSkill.target}</div>
                <div>Info: {this.props.selectedSkill.info}</div>
            </div>
        );
    }
}

export default TownSkillInfo;
