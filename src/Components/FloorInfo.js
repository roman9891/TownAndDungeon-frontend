import React, { Component } from 'react';
import FloorInfoEnemyCard from './FloorInfoEnemyCard'

class FloorInfo extends Component {
    renderEnemies = (enemiesArray) => enemiesArray.map(enemy => <FloorInfoEnemyCard key={enemy.id} enemy={enemy}/>)

    renderEnemyImages = (enemiesArray) => enemiesArray.map(enemy => <img className='town-enemy-image' src={enemy.image} alt=''></img>)
    
    render() {
        console.log(this.props)
        return (
            <div id='floor-info'>
                {!this.props.floor ? null : 
                    <div id='floor-info-div'>
                        {/* <div>{this.props.floor.num}</div> */}
                        <div className='floor-info-blurb'>{this.props.floor.info}</div>
                        {/* <div>{this.renderEnemies(this.props.floor.enemies)}</div> */}
                        <div id='dungeon-image-container'>
                            {this.renderEnemies(this.props.floor.enemies)}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default FloorInfo;
