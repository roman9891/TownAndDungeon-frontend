import React, { Component } from 'react';

class BattleSkillCard extends Component {
    clickHandler = () => {
        console.log(this.props.skill.cost, this.props.energy)
        if (this.props.skill.cost > this.props.energy) {
            console.log('not enough energy')
        } else {
            this.props.actionHandler(this.props.skill, this.props.heroId)
            this.props.actionHider()
        }  
    }
    
    render() {
        return (
            <div className='battle-skill-card' onClick={this.clickHandler}>
                {this.props.skill.name}
            </div>
        );
    }
}

export default BattleSkillCard;
