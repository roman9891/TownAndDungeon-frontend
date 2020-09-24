import React, { Component } from 'react';
import BattleEnemyCard from '../Components/BattleEnemyCard'

class BattleEnemyContainer extends Component {
    renderEnemies = () => this.props.enemies.map((enemy, i)=> <BattleEnemyCard
        key={enemy.id}
        enemy={enemy}
        index={i}
        targeting={this.props.targeting}
        targetHandler={this.props.targetHandler}
        currentTarget={i === this.props.currentTarget.index ? true : false}
        actionEffects={this.props.actionEffects}
    />)
    
    render() {
        return (
            <div id='battle-enemy-container'>
                {this.props.enemies.length ? this.renderEnemies() : <div id='victory'>Victory</div>}
            </div>
        );
    }
}

export default BattleEnemyContainer;
