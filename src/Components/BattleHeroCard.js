import React, { Component } from 'react';
import BattleSkillContainer from '../Containers/BattleSkillContainer'

class BattleHeroCard extends Component {
    clickHandler = () => {
        if (this.props.targeting === 'ally') {
            this.props.allyHandler(this.props.index)
        }
    }
    
    render() {
        return (
            <div className='battle-outer-hero-card'>
                <div className='battle-inner-hero-card' onClick={this.clickHandler}>
                    <div>{this.props.hero.class}</div>
                    <img className='battle-hero-image' src={this.props.hero.image} alt=''></img>
                    <div>{this.props.hero.hp}/{this.props.hero.mhp}</div>
                    <div>{this.props.hero['starting-energy']}/{this.props.hero['max-energy']}</div>
                    <div>Stance: {this.props.hero.stance ? this.props.hero.stance[1] : null}</div>
                    <div>Buff: {this.props.hero.buff ? this.props.hero.buff[1] : null}</div>
                    <div>Condition: {this.props.hero.condition ? this.props.hero.condition : null}</div>
                    <BattleSkillContainer 
                        skills={this.props.hero.skills}
                        heroId={this.props.index}
                        energy={this.props.hero['starting-energy']} 
                        actionHandler={this.props.actionHandler} 
                        show={this.props.show}
                    />
                </div>
            </div>
        );
    }
}

export default BattleHeroCard;
