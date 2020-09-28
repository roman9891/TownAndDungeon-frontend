import React, { Component } from 'react';

class BattleEnemyCard extends Component {
    clickHandler = () => {
        if (this.props.targeting) {
            this.props.targetHandler(this.props.index)
        }
    }
    
    render() {
        const hp = {width: `${((this.props.enemy.hp) / this.props.enemy.mhp)*100}%`}
        const nrg = {width: `${((this.props.enemy.nrg) / this.props.enemy.mNrg)*100}%`}
        const targetingOuterDiv = {['background-color']: 'orange', cursor: 'pointer'}
        const targetingInnerDiv = {['background-color']: 'white', cursor: 'pointer'}
        
        return (
            <div className='battle-outer-enemy-card' onClick={this.clickHandler} style={this.props.targeting ? targetingOuterDiv : null}>
                <div className='battle-inner-enemy-card' style={this.props.targeting ? targetingInnerDiv : null}>
                    <div>{this.props.enemy.name}</div>
                    <img className='battle-enemy-image' src={this.props.enemy.image} alt=''></img>
                    <div className='hp' style={hp}>{this.props.enemy.hp}/{this.props.enemy.mhp}</div>
                    {/* <div>{this.props.enemy.hp}/{this.props.enemy.mhp}</div> */}
                    <div className='nrg' style={nrg}>{this.props.enemy.nrg}/{this.props.enemy.mNrg}</div>
                    <div>Stance: {this.props.enemy.stance ? this.props.enemy.stance[1] : null}</div>
                    <div>Buff: {this.props.enemy.buff ? this.props.enemy.buff[1] : null}</div>
                    <div>Condition: {this.props.enemy.condition ? this.props.enemy.condition.name : null}</div>
                </div>
            </div>
        );
    }
}

export default BattleEnemyCard;
