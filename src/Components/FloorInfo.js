import React, { Component } from 'react';

class FloorInfo extends Component {
    renderEnemies = (enemiesArray) => enemiesArray.map(enemy => enemy.name)
    
    render() {
        console.log(this.props)
        return (
            <div id='floor-info'>
                {!this.props.floor ? null : 
                    <div id='floor-info-div'>
                        <div>{this.props.floor.num}</div>
                        <div>{this.props.floor.info}</div>
                        <div>{this.renderEnemies(this.props.floor.enemies)}</div>
                    </div>
                }
            </div>
        );
    }
}

export default FloorInfo;
