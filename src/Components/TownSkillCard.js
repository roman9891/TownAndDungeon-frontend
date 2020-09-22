import React, { Component } from 'react';

class TownSkillCard extends Component {
    
    clickHandler = () => {
        this.props.skillHandler(this.props.skill)
    }
    
    render() {
        return (
            <div className='town-skill-card'>
                <div onClick={this.clickHandler} className='inner-town-skill-card'>
                    {this.props.skill.name}
                </div>
            </div>
        );
    }
}

export default TownSkillCard;
