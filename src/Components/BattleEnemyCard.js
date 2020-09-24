import React, { Component } from 'react';

class BattleEnemyCard extends Component {
    clickHandler = () => {
        if (this.props.targeting) {
            this.props.targetHandler(this.props.index)
        }
    }
    
    render() {
        return (
            <div className='battle-outer-enemy-card' onClick={this.clickHandler}>
                <div className='battle-inner-enemy-card'>
                    <div>{this.props.enemy.name}</div>
                    <img className='battle-enemy-image' src={this.props.enemy.image} alt=''></img>
                    <div>{this.props.enemy.hp}/{this.props.enemy.mhp}</div>
                    <div>{this.props.enemy.nrg}/{this.props.enemy.mNrg}</div>
                    <div>Stance:</div>
                    <div>Buff:</div>
                    <div>Condition:</div>
                </div>
            </div>
        );
    }
}

export default BattleEnemyCard;
