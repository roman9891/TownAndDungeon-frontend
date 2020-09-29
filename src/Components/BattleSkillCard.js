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

    hoverHandler = () => {
        console.log('hover')
        this.props.infoHandler(this.props.skill)
    }
    
    render() {
        const notEnoughEnergy = {opacity: .5}

        return (
            <div 
                className='battle-skill-card' 
                onClick={this.clickHandler} 
                style={this.props.skill.cost > this.props.energy ? notEnoughEnergy : null} 
                onMouseEnter={this.hoverHandler}
            >
                {this.props.skill.name}
            </div>
        );
    }
}

export default BattleSkillCard;
