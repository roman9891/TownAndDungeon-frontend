import React, { Component } from 'react';

class TownSkillInfo extends Component {
    render() {
        return (
            <div id='town-skill-info'>
                <div>{this.props.selectedSkill.name}</div>
                <div>{this.props.selectedSkill.info}</div>
            </div>
        );
    }
}

export default TownSkillInfo;
