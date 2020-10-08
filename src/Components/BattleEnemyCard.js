import React, { Component } from 'react';

class BattleEnemyCard extends Component {
    clickHandler = () => {
        //responds to clicks only when they are eligible targets according to targeting.props
        if (this.props.targeting) {
            this.props.targetHandler(this.props.index)
        }
    }
    
    render() {
        //HP and NRG bar dynamically shrink as quotient decreases
        const hp = {width: `${((this.props.enemy.hp) / this.props.enemy.mhp)*100}%`}
        const nrg = {width: `${((this.props.enemy.nrg) / this.props.enemy.mNrg)*100}%`}
        
        //Enemies are highlighted in orange when they become available for targeting as determined by targeting.props
        const targetingOuterDiv = {['background-color']: 'orange', cursor: 'pointer'}
        const targetingInnerDiv = {['background-color']: 'white', cursor: 'pointer'}
        
        return (
            <div className='battle-outer-enemy-card' onClick={this.clickHandler} style={this.props.targeting ? targetingOuterDiv : null}>
                <div className='battle-inner-enemy-card' style={this.props.targeting ? targetingInnerDiv : null}>
                    <div className='name'>{this.props.enemy.name}</div>
                    <img className='battle-enemy-image' src={this.props.enemy.image} alt=''></img>
                    <div className='hp' style={hp}>{Math.ceil(this.props.enemy.hp)}/{this.props.enemy.mhp}</div>
                    <div className='nrg' style={nrg}>{this.props.enemy.nrg}/{this.props.enemy.mNrg}</div>
                    
                    {/* Displays status effects as they become valid otherwise they display nothing */}
                    <div>Stance: {this.props.enemy.stance ? this.props.enemy.stance[1] : null}</div>
                    <div>Buff: {this.props.enemy.buff ? this.props.enemy.buff[1] : null}</div>
                    <div>Condition: {this.props.enemy.condition ? this.props.enemy.condition.name : null}</div>
                </div>
            </div>
        );
    }
}

export default BattleEnemyCard;
