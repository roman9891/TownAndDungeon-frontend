import React, { Component } from 'react';

class FloorInfoEnemyCard extends Component {
    render() {
        return (
            <div className='floor-info-enemy-card'>
                <div>{this.props.enemy.name}</div>
                <img className='floor-info-enemy-card-image' src={this.props.enemy.image} alt=''></img>
            </div>
        );
    }
}

export default FloorInfoEnemyCard;
