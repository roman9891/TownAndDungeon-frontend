import React, { Component } from 'react';
import BattleSkillContainer from '../Containers/BattleSkillContainer'

class BattleHeroCard extends Component {
    clickHandler = () => {
        if (this.props.targeting) {
            this.props.allyHandler(this.props.index)
        }
    }
    
    render() {
        const hp = {width: `${((this.props.hero.hp) / this.props.hero.mhp)*100}%`}
        const nrg = {width: `${(this.props.hero['starting-energy']/this.props.hero['max-energy'])*100}%`}
        const targetingOuterDiv = {['background-color']: 'orange', cursor: 'pointer'}
        const targetingInnerDiv = {['background-color']: 'white', cursor: 'pointer'}
        const affected = {['background-color']: 'beige'}

        return (
            <div className='battle-outer-hero-card' style={this.props.targeting ? targetingOuterDiv : null}>
                <div className='battle-inner-hero-card' onClick={this.clickHandler} style={this.props.targeting ? targetingInnerDiv : null}>
                    <div>{this.props.hero.class}</div>
                    <img className='battle-hero-image' src={this.props.hero.image} alt=''></img>
                    <div className='hp' style={hp}>{Math.ceil(this.props.hero.hp)}/{this.props.hero.mhp}</div>
                    {/* <div>{this.props.hero.hp}/{this.props.hero.mhp}</div> */}
                    <div className='nrg' style={nrg}>{this.props.hero['starting-energy']}/{this.props.hero['max-energy']}</div>
                    <div className='stance' style={this.props.hero.stance ? affected : null}>Stance: {this.props.hero.stance ? this.props.hero.stance[1] : null}</div>
                    <div className='buff' style={this.props.hero.buff ? affected : null}>Buff: {this.props.hero.buff ? this.props.hero.buff[1] : null}</div>
                    <div className='condition' style={this.props.hero.condition ? affected : null}>Condition: {this.props.hero.condition ? this.props.hero.condition.name : null}</div>
                    <div className='presence' style={this.props.hero.provoke ? affected : null} style={this.props.hero.hide ? affected : null}>Presence: {this.props.hero.provoke ? 'Provoked' : null} {this.props.hero.hide ? 'Hidden' : null}</div>
                    <BattleSkillContainer 
                        skills={this.props.hero.skills}
                        heroId={this.props.index}
                        energy={this.props.hero['starting-energy']} 
                        actionHandler={this.props.actionHandler} 
                        show={this.props.show}
                        infoHandler={this.props.infoHandler}
                    />
                </div>
            </div>
        );
    }
}

export default BattleHeroCard;
